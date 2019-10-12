import sheepImg from 'ASSET/images/portfolio/sheep.png'
import footballImg from 'ASSET/images/portfolio/football.jpeg'
import color7Img from 'ASSET/images/portfolio/7color.jpeg'
import portfolio1Img from 'ASSET/images/portfolio1.jpg'
import designerImg from 'ASSET/images/portfolio/designer.jpg'
// import portfolio2Img from 'ASSET/images/portfolio2.jpg'
// import albumImg from 'ASSET/images/portfolio/album.jpg'
// import coolshowImg from 'ASSET/images/portfolio/coolshow.jpg'
// import cloudparkImg from 'ASSET/images/portfolio/cloudpark.jpg'
// import cityImg from 'ASSET/images/portfolio/city.jpg'
import portfolio3Img from 'ASSET/images/portfolio3.png'
import componentsImg from 'ASSET/images/portfolio/components.jpg'
import profilepicImg from 'ASSET/images/profilepic.png'

export default {
  "main": {
    "name":"华永妍",
    "occupation":"Web前端工程师",
    "description":"踏实靠谱，热爱工作，注重开发流程的规范性，注重代码可维护性和可重用性，能很好地与同事沟通配合，高效地完成工作",
    "image":profilepicImg,
    "bio":"毕业于广东财经大学，信息管理与信息系统专业；十年以上工作经验，熟悉主流的前端技术和工具，最擅长的框架是React、JQuery，有Java开发和动画设计的经验；生活中积极向上，健康自律，兴趣爱好有户外活动、打球、游泳、厨艺。",
    "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
    "email": "156342638@qq.com",
    "phone": "13450370736",
    "qq": "156342638",
    "address":{
      "street":"(Your Street)",
      "city":"(Your City)",
      "state":"(Your State)",
      "zip": "(Your Zip/Postal Code)"
    },
    "website": "http://www.timbakerdev.com",
    "resumedownload":"resume.pdf",
    "social":[
      {
        "name":"github",
        "url":"https://github.com/PopoApple",
        "className":"fa fa-github"
      }
    ]
  },
  "resume":{
    "education":[
      {
        "school":"广东财经大学",
        "degree":"本科",
        "graduated":"2002.09 - 2006.06",
        "description":"信息管理与信息系统"
      }
    ],
    "qualifications":[
      {
        "name":"系统集成项目管理工程师",
        "type":"计算机技术与软件专业资格证书",
        "level":"中级",
        "date":"2012.05",
        "description":""
      },
      {
        "name":"电子商务设计师",
        "type":"计算机技术与软件专业资格证书",
        "level":"中级",
        "date":"2005.11",
        "description":""
      }
    ],
    "work":[
      {
        "company":"广州学邦信息技术有限公司",
        "title":"高级前端工程师",
        "years":"2016.10 - 2019.06",
        "tags": ["后台管理系统", "架构设计", "规范化", "React", "Ant Design", "DvaJS", "Webpack"],
        "description":"工作内容是教育行业的信息系统开发，主要负责前端架构设计、制定规范、功能开发。使用的技术主要有React、Ant Design、DvaJS、Webpack。",
        "projects": [
          { "title": "SaaS OA", "date": "2018.06 - 2019.01", 
            "tags": ["后台管理系统", "React", "Ant Design", "DvaJS", "Webpack"],
            "desc": "该项目是一款定位于教培行业的SaaS版办公管理信息系统，提供人事、审批、考勤、消息等功能。项目框架是沿用了公司的一套比较完善的后台管理系统框架，使用的技术框架是React，UI组件库是Ant Design，数据流方案是DvaJS，构建工具是Webpack。" ,
            "duty": "负责项目框架搭建、开发规范制定、业务功能开发。" 
          },
          { "title": "BOSS校长信息系统", "date": "2016.10 - 2019.08", 
            "tags": ["后台管理系统", "重构", "规范化", "JQuery", "React", "Ant Design", "DvaJS", "Webpack"],
            "desc": "该项目是为某大型教育培训类企业定制开发的一套管理信息系统，提供教务管理、学生管理、账务管理、统计报表等功能。该项目原本基于传统的前后端不分离的架构开发，比较混乱、效率低、难以维护，因此进行了重构，将前端项目独立出来实现前后端分离，并且在后续的业务开发过程中不断积累和完善，形成了比较稳定的一套开发规范和组件库，整个项目进入了良性的运行。使用的技术重构前是JQuery，重构后是React、Ant Design、DvaJS、Webpack。" ,
            "duty": "负责旧系统部分功能维护、重构方案的设计和实现；新系统项目框架搭建、开发规范制定、业务功能开发。" 
          }
        ]
      },
      {
        "company":"广州优亿信息科技有限公司",
        "title":"前端工程师",
        "years":"2011.04 - 2016.10",
        "tags": ["移动端", "PC端Web应用", "桌面应用程序", "HTML5", "JQuery", "MUI", "JqueryMobile", "Bootstrap"],
        "description":"工作内容主要是移动互联网相关产品的开发，独立负责前端技术调研、交互设计、功能开发。使用的技术主要有HTML5、JQuery、MUI、JqueryMobile、Bootstrap。",
        "projects": [
          { "title": "微服务云平台", "date": "2014.10 - 2016.10", "tag": "PC端Web应用", 
            "tags": ["PC端Web应用", "HTML5", "JQuery"],
            "desc": "该项目是一个一站式建站服务平台，提供自助建站、站点托管、运营管理等服务。使用的技术主要是HTML5、JQuery、MUI。",
            "duty": "负责前端技术调研、交互设计、功能开发。"
          },
          { "title": "WebApp IDE", "date": "2014.03 - 2014.10", "tag": "桌面应用程序", 
            "tags": ["桌面应用程序", "JavaScript", "MUI"],
            "desc": "该项目是一款快速开发移动端APP的集成开发工具，包含代码编辑器、工程模板、组件化的代码块、真机调试、应用打包等功能。前端技术实现是基于开源的代码编辑器Brackets来做功能扩展。",
            "duty": "负责前端技术调研和开发，使用的技术主要是JavaScript、MUI。"
          },
          { "title": "易应用", "date": "2013.06 - 2013.12", "tag": "PC端Web应用", 
            "tags": ["PC端Web应用", "JQueryMobile"],
            "desc": "该项目是一款快速将传统PC端网页转换成移动端网页的智能工具，核心功能是自动抓取PC端网页内容和智能套用移动端的UI组件。",
            "duty": "负责移动端UI组件的开发，使用的技术主要是JQueryMobile。"
          },
          { "title": "小屏快看", "date": "2012.05 - 2013.10", "tag": "移动端App", 
            "tags": ["移动端App", "混合编程"],
            "desc": "该项目是一款休闲娱乐类的视频应用，包含手机桌面小视频、APP视频应用。",
            "duty": "负责APP视频应用的前端开发，使用的是手机原生和Web混合编程技术。"
          },
          { "title": "辐射探测器", "date": "2011.12 - 2012.05", "tag": "移动端App", 
            "tags": ["移动端App", "HTML5", "Canvas"],
            "desc": "该项目是一款随身的辐射探测应用，包含一个迷你的硬件设备和配套的手机APP，提供仪表盘、统计报表等功能。",
            "duty": "负责前端界面设计和功能开发，使用的技术主要是HTML5的Canvas。"
          },
          { "title": "IMS核心网业务评估软件", "date": "2011.04 - 2011.11", "tag": "桌面应用程序", 
            "tags": ["桌面应用程序", "Winform"],
            "desc": "该项目是为中国电信广东研究院定制的网络性能评估软件，包含可视化的网络设备拓扑结构模拟、业务参数设置和性能评估报告等功能。",
            "duty": "负责需求调研和主要功能开发，使用的技术是Winform。"
          }
        ]
      },
      {
        "company":"广东原创动力文化传播有限公司",
        "title":"动画师",
        "years":"2008.06 - 2010.06",
        "tags": ["动画设计", "Flash", "Photoshop"],
        "description":"工作内容是影视动画的制作，使用的工具主要是Flash、Photoshop。",
        "detailMaxWidth": 580,
        "projects": [
          { "title": "喜羊羊与灰太狼", "img": sheepImg, 
            "tags": ["动画设计", "管理"],
            "desc": "一部热播的少儿影视动画片。",
            "duty": "担任动画组长，负责分镜头设计、组员工作分配、成片剪辑工作。" 
          },
          { "title": "蹴鞠小英雄", "img": footballImg, 
            "tags": ["动画设计", "道具设计"],
            "desc": "一部古装风格的少儿影视动画片。",
            "duty": "负责人物动作、道具的设计和制作。" 
          },
          { "title": "七色战记", "img": color7Img, 
            "tags": ["动画设计"],
            "desc": "一部奇幻风格少儿影视动画片",
            "duty": "负责人物动作的设计和制作。" 
          }
        ]
      },
      {
        "company":"广州华南资讯科技有限公司",
        "title":"Java工程师",
        "years":"2006.03 - 2008.02",
        "tags": ["J2EE", "Java", "JSP", "Oracle", "Weblogic"],
        "description":"工作内容是社保行业的信息系统开发，使用的技术框架是J2EE，数据库是Oracle，应用服务器是Weblogic。",
        "projects": [
          { "title": "应用开发框架", 
            "tags": ["Eclipse插件开发"],
            "desc": "该项目是公司自主研发的内部统一应用开发框架，用于提升工作效率，提供UI组件库、表单引擎、查询引擎、校验引擎、代码生成等功能。使用的技术是Eclipse插件开发。",
            "duty": "负责可视化插入代码功能的开发" 
          },
          { "title": "佛山社保业务软件", 
            "tags": ["需求调研", "JSP"],
            "desc": "该项目是为佛山市人力资源和社会保障局的社保业务定制的信息系统，包含了信息登记、申报、审批等功能。使用的技术主要是JSP。",
            "duty": "负责业务需求调研、功能开发" 
          },
          { "title": "广州劳动保障业务软件", 
            "tags": ["JSP", "数据库存储过程"],
            "desc": "该项目是为广州市劳动与社会保障局的劳动保障业务定制的信息系统，包含了信息登记、申报、审批、统计报表等功能。使用的技术主要是JSP、数据库存储过程。",
            "duty": "负责业务功能开发、数据库存储过程开发。" 
          }
        ]
      }
    ],
    "skillmessage":"HTML、CSS、JavaScript、React、JQuery、Webpack、Git、Vue、Java",
    "skills":[
      {
        "name":"HTML",
        "level":"85%"
      },
      {
        "name":"CSS",
        "level":"85%"
      },
      {
        "name":"JavaScript",
        "level":"85%"
      },
      {
        "name":"React",
        "level":"80%"
      },
      {
        "name":"JQuery",
        "level":"70%"
      },
      {
        "name":"Webpack",
        "level":"55%"
      },
      {
        "name":"Git",
        "level":"45%"
      },
      {
        "name":"Vue",
        "level":"40%"
      },
      {
        "name":"Java",
        "level":"30%"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"UI组件库",
        "category":"一套后台管理信息系统UI组件库",
        "image":portfolio3Img,
        "url":"http://www.timbakerdev.com/originalthaifood.github.io",
        "items": [
          { "img": componentsImg, "desc": "这是工作中整理的一套后台管理信息系统UI组件库，提供日常开发项目常用的展示、输入、弹框等类型的组件，包含组件用法举例和API说明，有效地实现了代码的可重用性和可维护性，从而大大提高了团队的工作效率。"  }
        ]
      },
      {
        "title":"APP设计器",
        "category":"一款拖拽式的手机APP设计器",
        "image":portfolio1Img,
        "url":"https://www.canadianwanderlust.com",
        "items": [
          { "img": designerImg, "desc": "这是一款拖拽式的手机APP设计器，包含页面管理、页面设计、内容编辑、预览等功能。"  }
        ]
      },
      // {
      //   "title":"微站模板",
      //   "category":"多种场景的手机微站模板",
      //   "image":portfolio2Img,
      //   "url":"http://www.timbakerdev.com",
      //   "detailMaxWidth": 685,
      //   "items": [
      //     { "title": "时尚画册", "img": albumImg, "desc": "一款微相册应用模板，具有优雅的首页动画效果、简约时尚的画册列表页和可缩放的图片查器。"},
      //     { "title": "酷秀", "img": coolshowImg, "desc": "一款Metro风格的手机官网模板，具有酷炫的页面切换效果、不规则瀑布流式的图文列表页和带有评论功能的文章内容页。"},
      //     { "title": "白云乐园", "img": cloudparkImg, "desc": "一款个性化的娱乐休闲类微站模板，具有轻松自然的动画效果、创意的下拉菜单、简约时尚的图文列表页和带有打赏功能的文章内容页。"},
      //     { "title": "城市在线", "img": cityImg, "desc": "一款大方实用的综合类微站模板，具有主流的手机应用风格，如轮播图、图标式导航、指甲盖式的图文列表和缩放式的侧滑菜单。"}
      //   ]
      // }
    ]
  },
  "testimonials":{
    "testimonials":[
      {
        "text":"性格开朗，工作认真负责，思维逻辑严谨，业务能力强，代码风格规范整洁，善于沟通、能够很好地与产品后端沟通配合，乐于帮助同事。",
        "user":"罗明，Web前端工程师，广州学邦信息科技有限公司"
      },
      {
        "text":"作为华永妍的同事，我们是在工作认识的。她本人工作态度认真负责，在多次的项目合作中展现出优秀的工作能力和沟通能力。她勇于探究新技术，学习能力强，解决问题的能力强。她为人热心，善良淳朴宽容大度，处事利索而不失稳重。我相信她会用自己的实力给你们带来更多的惊喜！",
        "user":"郭诗博，Java工程师，广州学邦信息科技有限公司"
      },
      {
        "text":"华永妍工作踏实，责任心强，代码风格规范，为人热心，很好沟通，是个好同事",
        "user":"XXX，产品经理，广州优亿信息技术有限公司"
      }
    ]
  }
}
