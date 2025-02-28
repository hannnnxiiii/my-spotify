'use client'
import { useEffect,useState } from "react";
export default function SavedTracks(){
  useEffect(()=>{
    async function getSavedTracks(){
      const access_token = localStorage.getItem('access_token');
      if(access_token){
        const res = await fetch('https://api.spotify.com/v1/me/tracks', {
          headers: {
            'Authorization': `Bearer ${access_token}`, 
          },
          method: 'GET',
        })
        console.log(res)
      } 
    } 
    getSavedTracks()
  })
  return (
    <>
      <div>我喜欢的音乐</div>
      <ul></ul>
    </>
  )

}