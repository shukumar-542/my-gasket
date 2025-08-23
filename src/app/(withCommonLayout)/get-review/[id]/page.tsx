"use client";
import { Form, Input, Select, Upload, UploadFile } from "antd";
import TextArea from "antd/es/input/TextArea";
import { RcFile, UploadChangeParam } from "antd/es/upload";
import React, { useState } from "react";
import { PlusOutlined, CloseCircleFilled } from "@ant-design/icons";
import { IoIosStar } from "react-icons/io";
import { useParams } from "next/navigation";
import { useReviewProductMutation } from "@/redux/Api/products";
import { toast } from "sonner";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const GetReviewPage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [rating, setRating] = useState(0)
  const { id } = useParams()
  // console.log(id)
  const [reviewProduct, { isLoading }] = useReviewProductMutation();

  const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
    const files = info.fileList;

    const updatedFileList: UploadFile[] = await Promise.all(
      files.map(async (file) => {
        if (file.originFileObj) {
          const base64 = await getBase64(file.originFileObj as RcFile);
          return {
            uid: file.uid,
            name: file.name,
            status: "done",
            url: base64,
            originFileObj: file.originFileObj, 
          };
        }
        return file;
      })
    );
    setFileList(updatedFileList);
  };

  const handleRemove = (uid: string) => {
    setFileList((prevList) => prevList.filter((file) => file.uid !== uid));
  };


  //   Handle Rating functionality
  const handleRating = (index: any) => {

    setRating(index + 1)
  }


  // Handle submit rating
  const handleSubmitRating = (values: any) => {

    const formData = new FormData();

    console.log("Images", fileList);

    formData.append('customer_name', values.customer_name);
    formData.append('order_number', values.order_number);
    formData.append('star_rating', rating.toString());
    formData.append('comment', values.comment);
    formData.append('material_id', id?.toString() || '');
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("product_images", file.originFileObj);
      }
    });
    reviewProduct(formData)
      .unwrap()
      .then((response) => {
        // console.log("Review submitted successfully:", response);
        toast.success("Review submitted successfully!");
        // Optionally, reset the form or show a success message
      })
      .catch((error) => {
        // console.error("Error submitting review:", error);
        // Handle error, e.g., show an error message
        toast.error("Failed to submit review. Please try again.");
      });

  }

  return (
    <div className="max-w-4xl mx-auto mt-20 py-20">
      <Form layout="vertical" onFinish={handleSubmitRating}>
        <div className="flex items-center gap-10">
          <Form.Item label="Name" name={"customer_name"} className="w-full">
            <Input placeholder="Jane" />
          </Form.Item>

        </div>



        <Form.Item label="Insert Your Order Number" name={"order_number"}>
          <Input placeholder="# ID" />
        </Form.Item>
        <Form.Item label="Upload Product Images" name="product_images">
          {/* Image Preview with Remove Button */}
          <div className="flex flex-wrap gap-4 mt-4">
            {fileList.map((file) => (
              <div
                key={file.uid}
                className="relative group"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover rounded border border-gray-300"
                />
                <CloseCircleFilled
                  onClick={() => handleRemove(file.uid)}
                  className="absolute top-[-8px] right-[-8px] text-red-500 cursor-pointer bg-white rounded-full text-xl group-hover:opacity-100 opacity-75 transition-opacity"
                />
              </div>
            ))}
            <Upload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={(file) => {
                const isImage = file.type.startsWith("image/");
                return isImage || Upload.LIST_IGNORE;
              }}
              onChange={handleChange}
              multiple
              fileList={fileList}
            >
              {fileList.length >= 5 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </div>
        </Form.Item>
        <Form.Item label="Number Os Stars" name={"star_rating"}>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }, (_, index) => (
              <IoIosStar className="cursor-pointer" key={index} onClick={() => handleRating(index)} color={index < rating ? "#FFB547" : "#D0D5DD"} size={30} />
            ))}
          </div>
        </Form.Item>

        <Form.Item label="Comment Here" name={"comment"}>
          <TextArea rows={4} />
        </Form.Item>

        <button className="bg-[#F97316] rounded-sm px-10 py-3 text-white">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default GetReviewPage;
