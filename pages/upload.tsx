import { useState, useEffect, ChangeEvent } from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'

import axios from 'axios'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import useAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoAsset, setVideoAsset] = useState(null)

  const uploadVideo = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const selectedFile: File = e.target.files[0]
  }

  return (
    <div className="flex w-full h-full">
      <div className="bg-white rounded-lg">
        <div>
          <div>
            <p className="text-2xl font-bold">Upload video</p>
            <p className="mt-1 text-base text-gray-400">Post a video to your accoun</p>
          </div>
          <div className="border-4 border-gray-200 border-dashed rounded-xl flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
            {isLoading ? (
              <p>Uploading...</p>
            ) : (
              <div>
                {videoAsset ? (
                  <div></div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-xl font-bold">
                          <FaCloudUploadAlt className="text-3xl text-gray-300" />
                        </p>
                        <p className="text-xl font-medium text-center">Upload Video</p>
                      </div>
                      <p className="mt-10 text-sm leading-10 text-center text-gray-400">
                        MP4 or WebM or ogg <br />
                        720x1280 or higher <br />
                        Up to 10 minutes <br />
                        Less than 2GB
                      </p>
                      <p className="bg-[#f51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Select file
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload-video"
                      className="w-0 h-0"
                      onChange={uploadVideo}
                      accept="video/mp4,video/webm,vide/ogg"
                    />
                  </label>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
