"use client";
import { Form, Input, Select, Upload, UploadFile } from "antd";
import TextArea from "antd/es/input/TextArea";
import { RcFile, UploadChangeParam } from "antd/es/upload";
import React, { useState } from "react";
import { PlusOutlined, CloseCircleFilled } from "@ant-design/icons";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const GetReviewPage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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

  return (
    <div className="max-w-4xl mx-auto mt-20 py-20">
      <Form layout="vertical">
        <div className="flex items-center gap-10">
          <Form.Item label="First Name" className="w-full">
            <Input placeholder="Jane" />
          </Form.Item>
          <Form.Item label="Last Name" className="w-full">
            <Input placeholder="Cooper" />
          </Form.Item>
        </div>

        <Form.Item>
          <Select
            options={[
              { value: "Gomma Para1", label: "Gomma Para1" },
              { value: "Gomma Para2", label: "Gomma Para2" },
              { value: "Gomma Para3", label: "Gomma Para3" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Insert Your Order Number">
          <Input placeholder="# ID" />
        </Form.Item>

        <Form.Item label="Comment Here">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload Product Images">
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
      </Form>
    </div>
  );
};

export default GetReviewPage;
