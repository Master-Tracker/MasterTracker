import React from 'react'
import {FileUploader} from 'react-drag-drop-files';
import { FiUpload } from "react-icons/fi";

export function Documents() {
  return (
    <div className='flex flex-col w-[1000px] mt-16'>
      <div className='p-4 rounded-t-md bg-header'>
        <h1 className='font-bold text-white'>Master Tracker Documents</h1>
      </div>
      <div className='p-12 rounded-b-sm shadow-md'>
        <p className='items-start text-sm text-neutral'>Upload documents you want to store </p>
        <div className='mt-4'>
          <FileUploader
            // handleFiles={handleDrop}
            multiple
          >
            <div className='flex flex-col bg-[#F0F4F8] items-center justify-center w-full cursor-pointer' style={{ padding: '28px', border: '2px dashed #707070', textAlign: 'center', borderRadius: '8px' }}>
              <FiUpload className='mb-4 text-neutral' size={20}/>
              <p className='text-neutral'>Drag and Drop or <span className='cursor-pointer text-brandColor1 hover:underline'>Browse</span> Files Here </p>
            </div>
          </FileUploader>
        </div>
      </div>
    </div>
  )
}