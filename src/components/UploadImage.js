import React, { useCallback, useState } from "react";
import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import { useDropzone } from "react-dropzone";

export default function UploadImage() {
  const [img, setImg] = useState([]);

  const { mutateAsync: upload } = useStorageUpload();
  const onDrop = useCallback(async (acceptedFiles) => {
    const _img = await upload({ data: acceptedFiles });
    setImg(_img);
  }, [upload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  console.log(img);

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <button>Choose Profile Picture</button>
      </div>
      <div style={imageContainerStyles}>
        {img.map((uri) => {
          return (
            <MediaRenderer
              key={uri}
              src={uri}
              alt="Image"
              width="400px"
              style={imageStyles}
            />
          );
        })}
      </div>
    </div>
  );
}

const dropzoneStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
  padding: "20px",
  border: "2px dashed #cccccc",
  borderRadius: "8px",
  backgroundColor: "#f5f5f5",
  cursor: "pointer",
};

const imageContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const imageStyles = {
  margin: "10px",
};
