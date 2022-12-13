import React from "react";
import "react-slideshow-image/dist/styles.css";

import "./ProjectsPage.css";
import { Slide } from "react-slideshow-image";

export const ProjectsPage = () => {
  const image1 = [
    "https://photos.zillowstatic.com/fp/85fdfccc2c31bcedc014b70a89c4e02d-cc_ft_1536.webp",
    "https://photos.zillowstatic.com/fp/5c6b7ce0d571934883f13cf3373851f3-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/952bd60b6a2807e6dbb8578cbf422c59-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/8b5697f19ad06978fdf08a0ed3d02708-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/226c9d3db490ae86b6f63041c37d2753-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/829330abbcb62ea4e578e5db6e4b8d4f-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/6d9a4d6639649f9a4a7ff6e60d5b7b48-cc_ft_768.webp",
  ];
  const image2 = [
    "https://photos.zillowstatic.com/fp/8c0064b4294c8a763c9f9a10eec2c69b-cc_ft_1536.webp",
    "https://photos.zillowstatic.com/fp/23b55029b8aa19151c97e8f14f537c9f-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/139f9fdf18c3b545d118578f1dc0053c-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/72c65f2ca40d84483678e79d74be24a4-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/94de414416f8d3403d10f7e8a97a8156-cc_ft_768.webp",
    "https://photos.zillowstatic.com/fp/344ea39200e9c66265a344589a1e3229-cc_ft_768.webp",
  ];
  const image3 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56786163_537704603299975_5411927653617762304_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=LrSWCMDkrIcAX-zOJFv&_nc_ht=scontent-sea1-1.xx&oh=00_AfDG3GZVqLbCLKf7VCcvh7HlM6B84_CFRm3qUmF2-zwgVQ&oe=63BE30A7",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57358204_537704553299980_6201658902539403264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4jbszD1LBz8AX8TvwRL&_nc_ht=scontent-sea1-1.xx&oh=00_AfAcw-0qMNUcw4TGnuK22bUT6-9WkGglcMnsjF1aWnSu6g&oe=63BE1524",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56830041_537704426633326_8550342926335475712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=c8B2WqTDUzoAX-YVH1C&_nc_ht=scontent-sea1-1.xx&oh=00_AfAkOEr0M_daOHt0whfMR8kzK7zNLySIvwUtqkCAlwCVvw&oe=63BE0DBC",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56938105_537704449966657_7729552234865754112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Wgq22OauUdEAX-2Y4t6&_nc_ht=scontent-sea1-1.xx&oh=00_AfBAF3yD_AZVXBSkIyexeyPriQKr59gKu07ASZN_FjT5ig&oe=63BE08DE",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56949279_537704226633346_2072226234607075328_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=fo5Bw71JhzwAX_TCJX7&_nc_ht=scontent-sea1-1.xx&oh=00_AfDNxx6kq4qu4QRp-nyjKs995pwgjlX1SXEjLyzogdyQgQ&oe=63BE2155",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56894388_537704289966673_8738146294112976896_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=hA860ymCx-UAX8Opp1I&_nc_ht=scontent-sea1-1.xx&oh=00_AfDgrXd4hH4MjJ1iEMsnKz1PMsCOS-wX1o96FN2Z7kMXVg&oe=63BE10F4",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57451112_537704506633318_6098233311207882752_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=JZd-1m48ucgAX95aunp&_nc_ht=scontent-sea1-1.xx&oh=00_AfCO1LvSIz4haT8yRHy4OnH96mBylew3kOVfyL3y0u7OeA&oe=63BE1C5C",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57062115_537704386633330_8337549549044236288_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=r0bAHrr6hoEAX9r73CU&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AfDeXorx5VMzE9qrv94XfyvggR8PRHz7-TD8h3J2DnR-1g&oe=63BDFFA8",
  ];
  const image4 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57098921_537692959967806_5898982970823278592_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=KkmkeX2lgw4AX_tWIQT&_nc_ht=scontent-sea1-1.xx&oh=00_AfCjku4sv4IFsed7il9xC2KqCWXt6bcHaOvYSlIBhxCtjw&oe=63BE088A",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56781075_537692469967855_901688496433922048_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=NAtEy9-PhWwAX8qE4qb&_nc_ht=scontent-sea1-1.xx&oh=00_AfAyUd_q_Lmo3LjpawSJlIdGz9wSR5NJ2bb_ru10t4CXfQ&oe=63BE2023",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57484863_537692643301171_123651812099096576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4XjVlxGwv4YAX-RiCj5&_nc_ht=scontent-sea1-1.xx&oh=00_AfANH1FwmxLZhFCyCOCgToAjN7XtZAu-GMhhpoqwB7vFNQ&oe=63BE1178",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57168426_537692426634526_5115162769427005440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=cMHJxUNSLMEAX98wQ5o&_nc_ht=scontent-sea1-1.xx&oh=00_AfCJuN9at1skn0vod5YW8HtufOnljblnpg_2xAFsyXp_eQ&oe=63BE1EAF",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56775618_537692823301153_2065229604032872448_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9LgKmgOyBV8AX-y4GxI&_nc_ht=scontent-sea1-1.xx&oh=00_AfBHD6yFSKQzVRJkUdgrluvuoMAZsFdtPUxjg0Cz4cAezw&oe=63BE160D",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56795551_537692566634512_173494405058002944_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=zjfjWjhN-ysAX9-BQxS&_nc_ht=scontent-sea1-1.xx&oh=00_AfA6a3ZVdBZ7FsJqD_KamtSWETMi4KrkW_lbwvp8LGRcsw&oe=63BE0D22",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57410763_537692769967825_1413932813282967552_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=94_IJxNdUSMAX95MnEA&_nc_ht=scontent-sea1-1.xx&oh=00_AfALr-lepYnHyT1l5zh5amp-B7Kn0sH6DOCdbPMu02Hjng&oe=63BE25F5",
  ];
  const image5 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56806609_537674713302964_8849643718131580928_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=hqt8U9aVQmkAX_tYtac&_nc_ht=scontent-sea1-1.xx&oh=00_AfBCa3APB3tZtJ1akLlMOjE32BbfWy2wVkssWEOZpOAmsw&oe=63BE307D",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56764512_537674666636302_2583665781959032832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Ka6MIdCIgD4AX-4s8H4&_nc_ht=scontent-sea1-1.xx&oh=00_AfCBBFMAJIOXHsvtgumVLvRJYd_3XusGvlgFShwyXn11og&oe=63BE28B8",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57083544_537674639969638_2436629565150330880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=R6mxyT7kHsgAX_Z5RLU&_nc_ht=scontent-sea1-1.xx&oh=00_AfAMsTgxx3-OuGO-Wu2BaKRjEzJ0l450amuYodxv0amwjQ&oe=63BE2059",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56920234_537674853302950_577615106368602112_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=wZCX1g_c6CAAX-HLwPW&_nc_ht=scontent-sea1-1.xx&oh=00_AfCSLZKs3b4tt5MqPs77RzSVI_jvSWr7SzHT4I7gfQMBzw&oe=63BE18B5",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57186086_537674726636296_4613613913282445312_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=lxvkKeFP2MEAX_m4Uf0&_nc_ht=scontent-sea1-1.xx&oh=00_AfDJPDut74kbz3v4CTdT2-b6TPyxG7SUVyeNkg_VG_4WrA&oe=63BE2FB3",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56963243_537674739969628_7116186993251319808_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=P0Jtn6YK1QEAX-nkalv&_nc_ht=scontent-sea1-1.xx&oh=00_AfAZq-TSe6gi9Dgc3vw4x9MkAjhpBrNH8UDbT2mpeUOAww&oe=63BE3303",
  ];
  const image6 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56363576_533854790351623_3299664262158352384_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=b2ZCPTYQEBoAX8hbtdo&_nc_ht=scontent-sea1-1.xx&oh=00_AfACi_GYDMEGKsYkuLU07cfCvbMMs-v1g1uadScXKfApcg&oe=63BE242C",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56317576_533854710351631_5921122968888410112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=O5iBhklj9YEAX92F1-R&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AfDOmv6iA9Tzbx2V3V5AS9HKE9z5oK-4UDlLOuawr_InuA&oe=63BE039B",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56344479_533854673684968_4535800423117750272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=uCVQGwqeLlMAX_h8ZGX&_nc_ht=scontent-sea1-1.xx&oh=00_AfDHxRiJ8Yb0-PUW13uVVvd-6XuPsHUZe8VaAVoJstdlCw&oe=63BE09D5",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56425585_533854647018304_8077553050945847296_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=J-O4ijDYYxoAX-eieHn&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AfDDRhWb1iJm_3PknNJ2xKNQ1m0wHF9O3lrHhbeFGkUI_A&oe=63BE34C7",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56229339_533854607018308_2751016695861608448_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=UV9vyiF_FLwAX8Xsx9u&_nc_ht=scontent-sea1-1.xx&oh=00_AfAdkRwZIN48Beqftmt8_42wQHruQUiEZ6uFqeYFDxGSkw&oe=63BE2592",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56652767_533854617018307_8571983346689638400_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=aXrZ-u-yCSMAX_Fqq-w&_nc_ht=scontent-sea1-1.xx&oh=00_AfBr84qaaSXFLF1owHqfeu9Wj4KX4xKg1DWBFxhEy6nbDw&oe=63BE0DBF",
  ];
  const image7 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60210113_552937081776727_7610769592830394368_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SxH05ifDCXEAX_VO6Ga&_nc_oc=AQkBlivGaAPuL9MjV5U5NjdfdPDzxswTNISBcaOjSqkHpiyelMZeSGRWM6cZgS8nMS3ywxBN77OTz1uiHm-IMut6&_nc_ht=scontent-sea1-1.xx&oh=00_AfDUXRdaPY8j96tFGCgLuXEEWQEM4G3Jqkn9VPurRIcLyA&oe=63BE3682",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60384834_552937108443391_7664548866913468416_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d9S2gH0W0A4AX_i-004&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AfAxa84eLVfNfcJsT5_lUSKiYmP6yeBmUL5mZMntc-os7Q&oe=63BE0AC2",
  ];
  const image8 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/61867517_566278127109289_2866248164447354880_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=V0_K-_zcHk4AX_j34kI&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AfAaf86VG5k2w62owBDXzb42IaGwTlHayZYS7YABT5rhyw&oe=63BE2DD8",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/62049815_566278150442620_8919737945179553792_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c8V5BhhSh-EAX-bUW0U&_nc_ht=scontent-sea1-1.xx&oh=00_AfAdrt6qQ0voygoxWBIUHjQLzAIpxXLksQHcK8skWJAETw&oe=63BE1388",
  ];
  const image9 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/67925792_604074013329700_7375027861679243264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4Yu_IuXOzPUAX-s3phK&_nc_ht=scontent-sea1-1.xx&oh=00_AfBQjRDzA5_rKdaZoEwX3zzdjMHF60qJY-iSCE9vHp1o1A&oe=63BE0695",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/67939428_604074043329697_6707136867780788224_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RgDha3o_9rcAX9QmfTs&_nc_ht=scontent-sea1-1.xx&oh=00_AfDNktFis72atJxm-Zd3RD-3VtX4r36JXOonCMFAZW9TCg&oe=63BE0728",
  ];
  const image10 = [
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/71407474_634776703592764_7479352286586601472_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdH9UKfnEXEAX_Co0IB&_nc_ht=scontent-sea1-1.xx&oh=00_AfBKRlftzgmNTMUjAW1n2_fM0xp0d_mw2Jy1aL2Hbtdgng&oe=63BE0AAF",
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/71496945_634776716926096_4259412693435285504_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3eczQ9o-ZA4AX-qs0G-&_nc_ht=scontent-sea1-1.xx&oh=00_AfBtoXX-XyyIWmqXka4fvqAm7JHT9-W7aHutrmIKB26E1A&oe=63BE1F0D",
  ];
  return (
    <div id="projectPage">
      <h1 id="title">Projects</h1>
      <Slide>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[0]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[1]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[2]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[3]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[4]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>{" "}
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[5]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${image1[6]})`,
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </Slide>
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image2[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image2[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image2[2]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image2[3]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>{" "}
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image2[4]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image2[5]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[2]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[3]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[4]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>{" "}
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[5]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[6]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>{" "}
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image3[7]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>{" "}
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[2]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[3]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>{" "}
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[4]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[5]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image4[6]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image5[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image5[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image5[2]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image5[3]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>{" "}
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image5[4]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image5[5]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image6[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image6[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image6[2]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image6[3]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>{" "}
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image6[4]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image6[5]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>{" "}
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image7[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image7[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>{" "}
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image8[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image8[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>{" "}
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image9[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image9[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>{" "}
      <div id="slide2">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image10[0]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image10[1]})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Slide>
      </div>{" "}
    </div>
  );
};
