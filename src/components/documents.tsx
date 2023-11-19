import React, {useState, useCallback} from 'react';
import { useDropzone} from 'react-dropzone';
import { FiUpload } from "react-icons/fi";

export function Documents() {

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader;
  
    file.onload = function() {
      setPreview(file.result);
    }
  
    file.readAsDataURL(acceptedFiles[0])
  }, [])
  
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement & {
    files: FileList;
  }

  setFile(target.files[0]);

  const file = new FileReader;

  file.onload = function() {
    setPreview(file.result);
  }

  file.readAsDataURL(target.files[0])
}

  // if ( typeof file === 'undefined' ) return;

  // const formData = new FormData();

  // formData.append('file', file);
  // formData.append('upload_preset', '<Your Unsigned Upload Preset>');
  // formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

  // const results = await fetch('https://api.cloudinary.com/v1_1/<Your Cloud Name>/image/upload', {
  //   method: 'POST',
  //   body: formData
  //   }).then(r => r.json());
  
  return (
    <div className='flex flex-col w-[1000px] mt-16'>
      <div className='p-4 rounded-t-md bg-header'>
        <h1 className='font-bold text-white'>Master Tracker Documents</h1>
      </div>
      <div className='p-12 rounded-b-sm shadow-md'>
        <p className='items-start text-sm text-neutral'>Upload documents you want to store </p>
        <div className={`bg-[#F0F4F8] mt-4 border-dashed rounded-md border-2 p-8 items-center flex flex-col ${isDragActive ? '' : 'border-[#707070]'}`}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p className='text-neutral'><FiUpload size={20} className='flex items-center w-full mb-2'/>Drop the files here ...</p> :
              <p className='cursor-pointer text-neutral'><FiUpload size={20} className='flex items-center w-full mb-2'/>Drag and Drop or <span className='text-brandColor1'>Browse</span> Files Here</p>
          }
        </div>
          {preview && (
            <p className='w-[35%] mt-4'><img src={preview as string} alt="Upload preview" /></p>
          )}
        </div>
        <button className='p-2 mt-4 font-semibold rounded-md w-28 text-brandColor1 bg-secondary' type='submit'>Submit</button>
      </div>
    </div>
  )
}