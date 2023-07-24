import { useStateProvider } from "@/context/StateContext";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function CaptureAudio(hide) {

  const[{userInfo,currentChatUser,socket},dispatch]=useStateProvider();

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [waveForm, setWaveForm] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const audioRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const waveFormRef = useRef(null)
  


  return <div className="flex text-2xl 2-w-full justify-end items-center">
<div className="pt-1">
  <FaTrash
  className="text-panel-header-icon"
  onClick={() =>hide}
  />
</div>
  <div className="mx-4 py-2 px-4 text-white text-lg flex gap-3 justify-center items-center bg-search-input-container-background rounded-full drop-shadow-lg">
  {isRecording ?(
  <div className="text-red-500 animate-pulse 2-60 text-center"></div>
  ):(
    <div>{
      
      }</div>
  )}
  </div>

  </div>;
}

export default CaptureAudio;
