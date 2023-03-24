import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Component/About/About';
import Resume from './Component/Resume/Resume';
import Project from './Component/Project/Project';

import opencart from './Image/opencart.jpg'
import regtech1 from './Image/regtech1.jpg'
import pokergame from './Image/pokergame.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));

const exps = [
  { id: 1, title: '英發食品', date: '2022/06～至今', descriptions: ['協助建置私有雲，包含設備採購、組裝、規劃及Vmware、TrueNAS安裝等', 'Linux Ubuntu20.04 搭配PHP、MySQL架設opencart購物商城及o2oa辦公平台', '主機維護管理、資料庫備份'] },
  { id: 2, title: '元大期貨', date: '2021/07～2021/08', descriptions: ['學習金融知識及開發技巧', 'Python實作基礎程式交易', '考取證券商業務員資格'] },
  { id: 3, title: '丸龜製麵', date: '2019/07～2020/09', descriptions: ['負責點餐、製作、收銀及教導新人', '態度認真負責被指名晉升組長'] },
  // { id: 4, title: '梅惠敏記帳士', date: '2019/03－2019/07', descriptions: [''] },
  { id: 5, title: '國立高雄科大', date: '2018/09～2022/06', descriptions: ['資訊管理系', '主修智慧物聯網、智慧金融大數據', '畢業專題運用React Native開發，並獲得【110學年度實務專題競賽】優勝'] },
]

const skills = [
  { id: 1, title: '前端開發', details: ['HTML', 'CSS', 'JavaScript', 'RWD'], description: '熟悉HTML、CSS，能夠獨立完成有RWD的網頁切版。具備操作DOM及事件處理的能力，且有API串接的相關經驗。' },
  { id: 2, title: '前端框架', details: ['React'], description: '瞭解React核心概念，可使用CLI工具快速建置專案並以框架進行開發。' },
  { id: 3, title: '版本控制', details: ['Git', 'Github'], description: '瞭解Git指令的使用，並能夠以其進行版本控制。' },
  // { id: 4, title: '作業系統', details: ['Windows', 'Linux'], description: '' },
  { id: 5, title: '繪圖軟體', details: ['Photoshop', 'Illustrator'], description: '具備基礎操作能力，包含圖片去背、後製、合成，也可繪製向量圖檔及進行排版。' },
]

const projects = [
  { id: 1, url: 'https://www.yingfa.com.tw/', img: opencart, title: '購物商城架設', description: '從建置基礎設備開始，採用LAMP架構做為Web框架以安裝opencart，並持續的進行模組擴充、維護等。在資料方面除了定期透過VMware備份，也在資料庫設定排程自動備份。另也曾安裝O2OA、TrueNAS等多套軟體。' },
  { id: 2, url: 'https://drive.google.com/drive/folders/1MxyutU7ZpQ1uoTReCM6nFeZbmdj5CdK9?usp=sharing', img: regtech1, title: '法規查詢與媒合', description: '專為金融新創業者而生的APP，使用React Native實作前端，搭配基礎NLP替新聞添加分類標籤(詞袋語言模型)，主要提供法規查詢及律師媒合，希望可以幫助金融新創業者減少觸法，倘若不慎違法也能即時性的幫助；另一方面跟律師配合，為其提高收入及曝光機會。' },
  { id: 3, url: 'https://susu725.github.io/Poker-Game/', img: pokergame, title: '撲克遊戲', description: '以React實作的撲克遊戲！' },
]

root.render(
  <>
    <BrowserRouter basename='/Personal-Website'>
      <Routes>
        <Route path='/Resume' element={<Resume exps={exps} skills={skills} />}></Route>
        <Route path='/Project' element={<Project projects={projects} />}></Route>
        <Route path='/' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
