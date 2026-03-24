<template>
  <div class="home-view">
    <!-- 首页 -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 data-speech-id="home-title">临夏砖雕</h1>
        <p data-speech-id="home-1">中国传统工艺瑰宝</p>
        <button class="btn" id="enter-exhibition" @click="openPanorama">进入360°全景展厅</button>
      </div>
    </section>

    <!-- 历史渊源 -->
    <section id="history" class="section">
      <h2 data-speech-id="history-title">历史渊源</h2>
      <div class="history-content">
        <div class="history-item" data-speech-id="history-1">
          <h3>秦汉起源</h3>
          <p>临夏砖雕历史悠久，可追溯至秦汉时期。当时的砖雕工艺简单，主要用于建筑装饰，为后来的发展奠定了基础。</p>
        </div>
        <div class="history-item" data-speech-id="history-2">
          <h3>宋金成熟</h3>
          <p>宋金时期，临夏砖雕工艺逐渐成熟，雕刻技法更加精细，题材也更加丰富，开始出现人物、花卉等复杂图案。</p>
        </div>
        <div class="history-item" data-speech-id="history-3">
          <h3>明清鼎盛</h3>
          <p>明清时期是临夏砖雕的鼎盛时期，工艺达到了炉火纯青的地步，作品题材广泛，技艺精湛，成为建筑装饰的重要组成部分。</p>
        </div>
        <div class="history-item" data-speech-id="history-4">
          <h3>河州流派</h3>
          <p>临夏古称河州，形成了独特的河州砖雕流派，以其精细的雕刻工艺和丰富的文化内涵而闻名。</p>
        </div>
        <div class="history-item" data-speech-id="history-5">
          <h3>南北双绝</h3>
          <p>临夏砖雕与徽州砖雕并称中国砖雕艺术的南北双绝，各有特色，共同构成了中国砖雕艺术的辉煌。</p>
        </div>
        <div class="history-item" data-speech-id="history-6">
          <h3>非遗殊荣</h3>
          <p>2006年，临夏砖雕被列入首批国家级非物质文化遗产代表性名录，这门千年古老工艺获得了国家级的官方保护与认可，正式开启了系统性传承与发展的全新篇章。</p>
        </div>
      </div>
    </section>

    <!-- 工匠精神 -->
    <section id="craftsman" class="section">
      <h2 data-speech-id="craftsman-title">工匠精神</h2>
      <div class="craftsman-content">
        <div class="craftsman-item" data-speech-id="craftsman-1">
          <h3>36道工序</h3>
          <p>临夏砖雕制作需要经过选料、制坯、画稿、雕刻、打磨等36道工序，每一道工序都需要工匠的精心操作。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-2">
          <h3>选料</h3>
          <p>选择质地细腻、色泽均匀的青砖是制作砖雕的第一步，只有优质的材料才能保证作品的质量。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-3">
          <h3>制坯</h3>
          <p>将选好的青砖切割成合适的尺寸，为后续的雕刻做准备。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-4">
          <h3>画稿</h3>
          <p>在青砖上绘制设计图案，这是砖雕的灵魂，决定了作品的艺术价值。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-5">
          <h3>雕刻</h3>
          <p>根据画稿进行精细的雕刻，这需要工匠具备深厚的艺术功底和丰富的经验。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-6">
          <h3>打磨</h3>
          <p>对雕刻完成的作品进行打磨，使其表面光滑细腻，展现出砖雕的质感。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-7">
          <h3>传承人坚守</h3>
          <p>一代又一代的砖雕传承人坚守着这门古老的工艺，将传统技艺发扬光大。</p>
        </div>
        <div class="craftsman-item" data-speech-id="craftsman-8">
          <h3>慢工细活</h3>
          <p>砖雕制作需要耐心和细心，慢工细活，每一件作品都凝聚了工匠的心血。</p>
        </div>
      </div>
    </section>

    <!-- 临夏砖雕视频二维码：扫码/点击跳纯视频页 -->
    <div style="text-align:center; margin:40px 0;">
      <p style="font-size:16px; color:#8B4513; margin-bottom:15px;">扫码/点击观看临夏砖雕视频</p>
      <!-- 用div包裹，增加点击区域，兼容所有设备 -->
      <div
        style="cursor:pointer; display:inline-block;"
        @click="handleVideoClick"
      >
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://player.bilibili.com/player.html?bvid=BV1EMXFBaEDc&autoplay=false"
          style="width:280px; height:280px; border-radius:8px; border:2px solid #F5C551;"
          alt="扫码看临夏砖雕非遗视频"
        >
      </div>
    </div>

    <!-- 作品展示 -->
    <section id="works" class="section">
      <h2 data-speech-id="works-title">作品展示</h2>
      <div class="works-content">
        <div class="work-card" data-speech-id="works-1" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>红园</h3>
            <div class="card-image red-garden"></div>
          </div>
          <div class="card-back">
            <h4>红园</h4>
            <p>红园是临夏砖雕的代表作之一，园内的砖雕作品题材丰富，技艺精湛，展现了临夏砖雕的独特魅力。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-2" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>东公馆</h3>
            <div class="card-image east-mansion"></div>
          </div>
          <div class="card-back">
            <h4>东公馆</h4>
            <p>东公馆的砖雕作品以其精细的雕刻工艺和丰富的文化内涵而闻名，是临夏砖雕的重要代表。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-3" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>八坊十三巷</h3>
            <div class="card-image eight-lanes"></div>
          </div>
          <div class="card-back">
            <h4>八坊十三巷</h4>
            <p>八坊十三巷是临夏砖雕的集中展示地，这里的砖雕作品种类繁多，风格各异，是了解临夏砖雕的重要窗口。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-4" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>蝙蝠纹</h3>
            <div class="card-image bat-pattern"></div>
          </div>
          <div class="card-back">
            <h4>蝙蝠纹</h4>
            <p>蝙蝠纹是临夏砖雕中常见的纹样，象征着福气和吉祥，体现了人们对美好生活的向往。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-5" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>回纹</h3>
            <div class="card-image spiral-pattern"></div>
          </div>
          <div class="card-back">
            <h4>回纹</h4>
            <p>回纹是临夏砖雕中的传统纹样，寓意着吉祥如意，连绵不断，是砖雕作品中的经典元素。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-6" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>鹿鹤同春</h3>
            <div class="card-image deer-crane"></div>
          </div>
          <div class="card-back">
            <h4>鹿鹤同春</h4>
            <p>鹿鹤同春是临夏砖雕中的经典题材，象征着长寿和吉祥，展现了人们对美好生活的祝愿。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-7" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>百子图</h3>
            <div class="card-image hundred-boys"></div>
          </div>
          <div class="card-back">
            <h4>百子图</h4>
            <p>百子图是临夏砖雕中的传统题材，寓意着多子多福，家庭和睦，是砖雕作品中的重要组成部分。</p>
          </div>
        </div>
       <div class="work-card" data-speech-id="works-8" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>牡丹纹</h3>
            <div class="card-image peony-pattern"></div>
          </div>
          <div class="card-back">
            <h4>牡丹纹</h4>
            <p>牡丹纹是临夏砖雕经典吉祥纹样，象征富贵荣华、繁荣昌盛，是民间建筑中最常用的装饰题材之一，雕刻层次丰富，造型饱满生动。</p>
          </div>
        </div>
        <div class="work-card" data-speech-id="works-9" @click="toggleCardFlip($event)">
          <div class="card-front">
            <h3>博古纹</h3>
            <div class="card-image bogu-pattern"></div>
          </div>
          <div class="card-back">
            <h4>博古纹</h4>
            <p>博古纹以古董器皿、文房四宝为核心元素，寓意清雅高洁、书香传家，是临夏砖雕中文人气息浓厚的经典纹样，体现了传统文化的雅致审美。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 传承与创新 -->
    <section id="heritage" class="section">
      <h2 data-speech-id="heritage-title">传承与创新</h2>
      <div class="heritage-content">
        <div class="heritage-item" data-speech-id="heritage-1">
          <h3>师徒传承</h3>
          <p>临夏砖雕通过师徒传承的方式，将传统技艺一代一代传递下去，确保了工艺的完整性和连续性。</p>
        </div>
        <div class="heritage-item" data-speech-id="heritage-2">
          <h3>学校教育</h3>
          <p>近年来，临夏砖雕开始走进学校，通过教育的方式培养新一代的砖雕人才，为传统工艺注入新的活力。</p>
        </div>
        <div class="heritage-item" data-speech-id="heritage-3">
          <h3>文创产品</h3>
          <p>临夏砖雕与现代设计相结合，开发出各种文创产品，让传统工艺走进现代生活。</p>
        </div>
        <div class="heritage-item" data-speech-id="heritage-4">
          <h3>3D扫描数字化</h3>
          <p>利用现代科技手段，对砖雕作品进行3D扫描和数字化处理，为传统工艺的保护和传承提供了新的途径。</p>
        </div>
        <div class="heritage-item" data-speech-id="heritage-5">
          <h3>线上展示</h3>
          <p>通过互联网平台，将临夏砖雕作品进行线上展示，让更多的人了解和欣赏这门传统工艺。</p>
        </div>
        <div class="heritage-item" data-speech-id="heritage-6">
          <h3>科技结合</h3>
          <p>临夏砖雕与现代科技相结合，探索新的创作方式和表现形式，为传统工艺的发展开辟了新的道路。</p>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="section">
      <h2>联系我们</h2>
      <div class="contact-content">
        <p>地址：甘肃省临夏回族自治州临夏市</p>
        <p>电话：0930-12345678</p>
        <p>邮箱：linxiazhuandiao@example.com</p>
      </div>
    </section>

    <!-- 360°全景展厅 -->
    <div id="panorama" class="panorama" :class="{ active: isPanoramaOpen }">
      <div class="panorama-content">
        <div class="panorama-image" 
             @mousedown="startDrag"
             @mouseleave="stopDrag"
             @mouseup="stopDrag"
             @mousemove="drag"
             @touchstart="startTouchDrag"
             @touchend="stopDrag"
             @touchmove="touchDrag"
             :style="{ transform: `translateX(${currentPosition}px)` }"
        ></div>
        <div class="panorama-markers">
          <div class="marker" style="top: 50%; left: 15%;" @click="showMarkerInfo({ title: '百子图', description: '寓意多子多福，高浮雕工艺，人物形象生动，展现了传统中国家庭的美满愿景。' })"></div>
          <div class="marker" style="top: 40%; left: 30%;" @click="showMarkerInfo({ title: '鹿鹤同春', description: '福禄双全，经典吉祥纹样，鹿象征长寿，鹤象征吉祥，共同构成美好的祝福。' })"></div>
          <div class="marker" style="top: 60%; left: 45%;" @click="showMarkerInfo({ title: '蝙蝠纹', description: '象征五福临门，蝙蝠与\'福\'谐音，是传统砖雕中常见的吉祥纹样。' })"></div>
          <div class="marker" style="top: 30%; left: 60%;" @click="showMarkerInfo({ title: '回纹边框', description: '绵延不断，福寿绵长，回纹是中国传统纹样之一，象征着永恒和吉祥。' })"></div>
          <div class="marker" style="top: 55%; left: 75%;" @click="showMarkerInfo({ title: '山水楼阁', description: '展现河州建筑特色，雕刻精细，层次分明，体现了临夏砖雕的独特风格。' })"></div>
          <div class="marker" style="top: 45%; left: 90%;" @click="showMarkerInfo({ title: '花鸟图案', description: '寓意生机勃勃，花卉和鸟类的组合展现了大自然的活力和美好。' })"></div>
        </div>
        <button class="close-btn" @click="closePanorama">关闭</button>
      </div>
    </div>

    <!-- 标注信息弹窗 -->
    <div id="marker-info" class="marker-info" :class="{ active: isMarkerInfoOpen }">
      <h3 id="info-title">{{ markerInfo.title }}</h3>
      <p id="info-description">{{ markerInfo.description }}</p>
      <button class="close-info" @click="closeMarkerInfo">关闭</button>
    </div>
    <!-- 可互动砖雕小人 -->
    <div id="brick-doll" class="brick-doll" 
         @click="handleDollClick"
         @mousedown="startDragDoll"
         @touchstart="startTouchDragDoll"
         :style="dollStyle"
    >
      <div class="doll-container">
        <div class="doll-head">
          <div class="doll-face"></div>
          <div class="doll-hat"></div>
        </div>
        <div class="doll-body">
          <div class="doll-clothes"></div>
        </div>
        <div class="doll-arm left"></div>
        <div class="doll-arm right">
          <div class="doll-knife"></div>
        </div>
        <div class="doll-legs"></div>
      </div>
    </div>

    <!-- 砖雕小知识弹窗 -->
    <div id="knowledge-popup" class="knowledge-popup" :class="{ active: isKnowledgeOpen }">
      <h3>砖雕小知识</h3>
      <p id="knowledge-content">{{ knowledgeContent }}</p>
      <button class="close-knowledge" @click="closeKnowledge">关闭</button>
    </div>

    <!-- 引导弹窗 -->
    <div id="guide-popup" class="guide-popup" :class="{ active: isGuideOpen }">
      <h3>引导</h3>
      <p id="guide-content">{{ guideContent }}</p>
      <button class="close-guide" @click="closeGuide">关闭</button>
    </div>

    <!-- 图片放大模态框 -->
    <div id="image-modal" class="image-modal" :class="{ active: isImageModalOpen }" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <span class="close-modal" @click="closeImageModal">&times;</span>
        <img id="modal-image" :src="modalImageSrc" alt="作品大图">
      </div>
    </div>

    <!-- 回到顶部按钮 -->
    <button id="back-to-top" class="back-to-top" :class="{ active: showBackToTop }" @click="scrollToTop">↑</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// 360°全景展厅
const isPanoramaOpen = ref(false);
const currentPosition = ref(0);
const isDragging = ref(false);
const startX = ref(0);

const openPanorama = () => {
  isPanoramaOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closePanorama = () => {
  isPanoramaOpen.value = false;
  document.body.style.overflow = 'auto';
};

const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.clientX;
};

const stopDrag = () => {
  isDragging.value = false;
  isDraggingDoll.value = false;
};

const drag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const deltaX = e.clientX - startX.value;
  currentPosition.value += deltaX;
  // 限制拖动范围，确保全景图始终可见
  const panoramaImage = document.querySelector('.panorama-image');
  if (panoramaImage) {
    const maxPosition = panoramaImage.offsetWidth - window.innerWidth;
    if (currentPosition.value > 0) currentPosition.value = 0;
    if (currentPosition.value < -maxPosition) currentPosition.value = -maxPosition;
  }
  startX.value = e.clientX;
};

// 触摸拖动
const startTouchDrag = (e) => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
};

const touchDrag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const deltaX = e.touches[0].clientX - startX.value;
  currentPosition.value += deltaX;
  // 限制拖动范围，确保全景图始终可见
  const panoramaImage = document.querySelector('.panorama-image');
  if (panoramaImage) {
    const maxPosition = panoramaImage.offsetWidth - window.innerWidth;
    if (currentPosition.value > 0) currentPosition.value = 0;
    if (currentPosition.value < -maxPosition) currentPosition.value = -maxPosition;
  }
  startX.value = e.touches[0].clientX;
};

// 标注信息弹窗
const isMarkerInfoOpen = ref(false);
const markerInfo = ref({ title: '', description: '' });

const showMarkerInfo = (info) => {
  markerInfo.value = info;
  isMarkerInfoOpen.value = true;
};

const closeMarkerInfo = () => {
  isMarkerInfoOpen.value = false;
};

// 砖雕小知识
const knowledgeList = [
  '临夏砖雕是中国非物质文化遗产之一。',
  '砖雕制作需要经过36道工序，每一道都需要精心操作。',
  '临夏砖雕与徽州砖雕并称中国砖雕艺术的南北双绝。',
  '砖雕作品通常采用青砖作为材料，因为青砖质地细腻，适合雕刻。',
  '传统砖雕技艺主要通过师徒传承的方式传递。',
  '临夏砖雕的题材广泛，包括人物、花卉、动物等。',
  '砖雕作品在建筑中主要用于装饰墙壁、门窗、屋脊等部位。',
  '现代砖雕艺术家正在探索将传统工艺与现代设计相结合的新途径。'
];

const isKnowledgeOpen = ref(false);
const knowledgeContent = ref('');

const closeKnowledge = () => {
  isKnowledgeOpen.value = false;
};

// 可互动砖雕小人
const isReading = ref(false);
const currentReadingIndex = ref(0);
const audio = new Audio("https://lf6-config.oceanengine.com/obj/doubao-media-public/20260322/linxia-zhundiao-doubao-voice.mp3");

// 小人位置
const dollLeft = ref('');
const dollTop = ref('');
const dollStyle = computed(() => {
  return {
    position: 'fixed',
    left: dollLeft.value || 'auto',
    top: dollTop.value || 'auto',
    bottom: dollTop.value ? 'auto' : '20px',
    right: dollLeft.value ? 'auto' : '20px',
    zIndex: '9999',
    transition: 'transform 0.5s ease'
  };
});

// 拖动小人
const isDraggingDoll = ref(false);
const dollStartX = ref(0);
const dollStartY = ref(0);

const startDragDoll = (e) => {
  isDraggingDoll.value = true;
  const rect = e.target.getBoundingClientRect();
  dollStartX.value = e.clientX - rect.left;
  dollStartY.value = e.clientY - rect.top;
  e.stopPropagation();
};

const startTouchDragDoll = (e) => {
  isDraggingDoll.value = true;
  const rect = e.target.getBoundingClientRect();
  dollStartX.value = e.touches[0].clientX - rect.left;
  dollStartY.value = e.touches[0].clientY - rect.top;
  e.stopPropagation();
};

const handleDollClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  // 播放音频
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  
  // 显示砖雕小知识
  const randomKnowledge = knowledgeList[Math.floor(Math.random() * knowledgeList.length)];
  knowledgeContent.value = randomKnowledge;
  isKnowledgeOpen.value = true;
  
  // 只有第一次点击时才执行朗读功能
  if (!isReading.value) {
    isReading.value = true;
    // 执行朗读功能
    readText();
  }
};

// 新的文本朗读功能（带标黄和小人跟动）
const readText = () => {
  // 收集所有需要朗读的元素：板块标题 + 小标题 + 段落
  const elements = [];
  
  // 先添加首页的临夏砖雕部分
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const heroElements = heroContent.querySelectorAll('h1, p');
    heroElements.forEach(el => {
      elements.push(el);
    });
  }
  
  // 然后添加其他部分（排除联系我们和首页部分）
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id === "contact" || section.id === "home") {
      return;
    }
    
    // 按照页面上的实际顺序读取元素：h2, h3, p
    const sectionElements = section.querySelectorAll('h2, h3, p');
    sectionElements.forEach(el => {
      elements.push(el);
    });
  });
  
  const synth = window.speechSynthesis;
  
  // 停止之前可能在播放的语音
  synth.cancel();
  
  // 核心：逐段朗读 + 移动小人 + 高亮显示
  function readNext(index) {
    // 读完所有段落就停止
    if (index >= elements.length) {
      // 清除所有高亮
      elements.forEach(el => {
        el.classList.remove('highlight');
      });
      
      // 重置小人位置到右下角，与原始实现一致
      const doll = document.getElementById('brick-doll');
      if (doll) {
        doll.style.position = 'fixed';
        doll.style.bottom = '20px';
        doll.style.right = '20px';
        doll.style.top = 'auto';
        doll.style.left = 'auto';
      }
      
      // 重置朗读状态，允许再次点击开始朗读
      isReading.value = false;
      currentReadingIndex.value = 0;
      return;
    }
    
    // 更新当前朗读索引
    currentReadingIndex.value = index;
    
    // 1. 先拿到当前要读的元素
    const el = elements[index];
    const text = el.textContent;
    
    // 2. 滚动到当前段落，确保在视口中
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // 3. 清除之前的高亮，为当前段落添加高亮
    elements.forEach(e => e.classList.remove('highlight'));
    el.classList.add('highlight');
    
    // 4. 让小人跟着当前朗读段落移动，位于读的位置右下角
    const doll = document.getElementById('brick-doll');
    if (doll) {
      // 获取当前段落的位置（相对于视口）
      const rect = el.getBoundingClientRect();
      const dollWidth = doll.offsetWidth;
      const dollHeight = doll.offsetHeight;
      
      // 计算相对于视口的位置，位于当前段落的右下角
      let newLeft = rect.right + 20; // 段落右侧20px
      let newTop = rect.bottom + 10; // 段落底部下方10px
      
      // 限制位置在可视区域内
      newLeft = Math.max(20, Math.min(newLeft, window.innerWidth - dollWidth - 20));
      newTop = Math.max(20, Math.min(newTop, window.innerHeight - dollHeight - 20));
      
      // 使用fixed定位，确保相对于视口定位，不受页面滚动影响
      doll.style.position = 'fixed';
      doll.style.left = `${newLeft}px`;
      doll.style.top = `${newTop}px`;
      doll.style.bottom = 'auto';
      doll.style.right = 'auto';
      // 确保小人始终可见
      doll.style.display = 'block';
      doll.style.zIndex = '9999';
    }
    
    // 5. 添加滚动事件监听器，确保小人在页面滚动时保持与朗读内容的相对位置
    const handleScrollForDoll = () => {
      if (isReading.value) {
        const currentEl = elements[currentReadingIndex.value];
        if (currentEl) {
          const doll = document.getElementById('brick-doll');
          if (doll) {
            const rect = currentEl.getBoundingClientRect();
            const dollWidth = doll.offsetWidth;
            const dollHeight = doll.offsetHeight;
            
            // 重新计算位置，保持相对位置不变
            let newLeft = rect.right + 20; // 段落右侧20px
            let newTop = rect.bottom + 10; // 段落底部下方10px
            
            // 限制位置在可视区域内
            newLeft = Math.max(20, Math.min(newLeft, window.innerWidth - dollWidth - 20));
            newTop = Math.max(20, Math.min(newTop, window.innerHeight - dollHeight - 20));
            
            doll.style.left = `${newLeft}px`;
            doll.style.top = `${newTop}px`;
          }
        }
      }
    };
    
    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScrollForDoll);
    
    // 5. 强制浏览器重排，确保高亮立即显示
    el.offsetHeight; // 触发重排
    
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";
    utter.rate = 1.0; // 正常语速
    utter.pitch = 1.0; // 正常音调
    utter.volume = 1.0; // 正常音量
    
    // 尝试使用更自然的语音合成器
    const voices = window.speechSynthesis.getVoices();
    // 优先选和豆包女声质感完全一致的官方在线女声 
    const targetVoice = voices.find(voice => 
        voice.name.includes("Xiaoxiao") || 
        voice.name.includes("晓晓") || 
        voice.name.includes("Yunxi") ||
        voice.name.includes("云溪") ||
        voice.name.includes("Microsoft Xiaoxiao Online") || 
        voice.name.includes("Yunxi Online") 
    ) || voices.find(voice => voice.lang.includes("zh-CN")); 

    if (targetVoice) {
      utter.voice = targetVoice;
    }

    utter.onend = () => {
      // 移除当前段落的高亮
      el.classList.remove('highlight');
      // 移除滚动事件监听器
      window.removeEventListener('scroll', handleScrollForDoll);
      readNext(index + 1); // 读完自动读下一段
    };
    
    // 立即开始朗读，不需要延迟
    synth.speak(utter);
  }
  
  // 开始朗读，从当前索引开始
  readNext(currentReadingIndex.value);
};

// 引导弹窗
const isGuideOpen = ref(false);
const guideContent = ref('');

const closeGuide = () => {
  isGuideOpen.value = false;
};

const showGuide = (sectionId) => {
  let text = '';
  switch (sectionId) {
    case 'history':
      text = '这里介绍了临夏砖雕的历史渊源，从秦汉起源到明清鼎盛，展现了砖雕艺术的发展历程。';
      break;
    case 'craftsman':
      text = '这里展示了临夏砖雕的工匠精神，包括36道工序、选料、制坯、画稿、雕刻、打磨等环节。';
      break;
    case 'works':
      text = '这里展示了临夏砖雕的代表作品，包括红园、东公馆、八坊十三巷等，以及经典纹样。';
      break;
    case 'heritage':
      text = '这里介绍了临夏砖雕的传承与创新，包括师徒传承、学校教育、文创产品、3D扫描数字化等。';
      break;
    case 'contact':
      text = '这里提供了联系我们的方式，欢迎您了解更多关于临夏砖雕的信息。';
      break;
    default:
      text = '';
  }

  if (text) {
    guideContent.value = text;
    isGuideOpen.value = true;
    
    // 自动关闭引导弹窗
    setTimeout(() => {
      isGuideOpen.value = false;
    }, 5000);
  }
};

// 回到顶部按钮
const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 图片放大模态框
const isImageModalOpen = ref(false);
const modalImageSrc = ref('');

const closeImageModal = () => {
  isImageModalOpen.value = false;
  document.body.style.overflow = 'auto';
};

// 作品卡片交互功能（合并翻转和放大）
const toggleCardFlip = (e) => {
  const card = e.currentTarget;
  // 1. 执行3D翻转显示简介
  card.classList.toggle('flipped');
  
  // 2. 执行放大对应作品图片
  const cardImage = card.querySelector('.card-image');
  const imageUrl = window.getComputedStyle(cardImage).backgroundImage;
  // 提取URL
  const url = imageUrl.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
  
  // 设置模态框图片
  modalImageSrc.value = url;
  // 显示模态框
  isImageModalOpen.value = true;
  // 禁止页面滚动
  document.body.style.overflow = 'hidden';
};

// 滚动事件处理
const handleScroll = () => {
  // 显示/隐藏回到顶部按钮
  if (window.scrollY > 300) {
    showBackToTop.value = true;
  } else {
    showBackToTop.value = false;
  }

  // 检测当前滚动到的板块
  const sections = document.querySelectorAll('.section');
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
      if (currentSection !== section.id) {
        currentSection = section.id;
        showGuide(currentSection);
      }
    }
  });
};

// 页面隐藏时停止朗读
const handleVisibilityChange = () => {
  if (document.hidden) {
    // 页面隐藏时停止朗读，但不重置朗读状态
    window.speechSynthesis.cancel();
  } else {
    // 页面重新显示时，如果之前正在朗读，重新开始朗读
    if (isReading.value) {
      // 重新执行朗读功能
      readText();
    }
  }
};

// 页面卸载时停止朗读
const handleBeforeUnload = () => {
  // 停止语音合成
  window.speechSynthesis.cancel();
  // 重置朗读状态
  isReading.value = false;
};

// 处理视频点击事件
const handleVideoClick = () => {
  window.open('https://player.bilibili.com/player.html?bvid=BV1EMXFBaEDc&autoplay=false', '_blank');
};

// 鼠标移动处理（拖动小人）
const handleMouseMove = (e) => {
  if (!isDraggingDoll.value) return;
  e.preventDefault();
  
  // 计算新位置
  let x = e.clientX - dollStartX.value;
  let y = e.clientY - dollStartY.value;
  
  // 获取小人尺寸
  const doll = document.getElementById('brick-doll');
  if (doll) {
    const dollWidth = doll.offsetWidth;
    const dollHeight = doll.offsetHeight;
    
    // 计算边界限制
    const maxX = window.innerWidth - dollWidth;
    const maxY = window.innerHeight - dollHeight;
    
    // 限制位置在可视区域内
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    
    dollLeft.value = `${x}px`;
    dollTop.value = `${y}px`;
  }
};

// 触摸移动处理（拖动小人）
const handleTouchMove = (e) => {
  if (!isDraggingDoll.value) return;
  e.preventDefault();
  
  // 计算新位置
  let x = e.touches[0].clientX - dollStartX.value;
  let y = e.touches[0].clientY - dollStartY.value;
  
  // 获取小人尺寸
  const doll = document.getElementById('brick-doll');
  if (doll) {
    const dollWidth = doll.offsetWidth;
    const dollHeight = doll.offsetHeight;
    
    // 计算边界限制
    const maxX = window.innerWidth - dollWidth;
    const maxY = window.innerHeight - dollHeight;
    
    // 限制位置在可视区域内
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    
    dollLeft.value = `${x}px`;
    dollTop.value = `${y}px`;
  }
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchmove', handleTouchMove);
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // 预加载语音列表
  window.speechSynthesis.getVoices();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('touchend', stopDrag);
  window.removeEventListener('visibilitychange', handleVisibilityChange);
  window.removeEventListener('beforeunload', handleBeforeUnload);
});
</script>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'SimSun', serif;
  background-color: #F5F5DC;
  color: #3E2723;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23F5F5DC"/><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%23D2B48C" stroke-width="0.5" opacity="0.3"/></svg>');
  line-height: 1.6;
}

/* 英雄区域 */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%238B4513"/><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%23A0522D" stroke-width="1" opacity="0.5"/></svg>');
  color: #F5F5DC;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.8);
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #8B4513;
  color: #F5F5DC;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.btn:hover {
  background-color: #A0522D;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.4);
}

/* 通用章节样式 */
.section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #8B4513;
  position: relative;
}

.section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #D4AF37;
}

/* 历史渊源 */
.history-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.history-item {
  background-color: rgba(255,255,255,0.8);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.history-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.history-item h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .history-content {
    grid-template-columns: 1fr;
  }
}

/* 工匠精神 */
.craftsman-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.craftsman-item {
  background-color: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.craftsman-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.craftsman-item h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* 作品展示 */
.works-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .works-content {
    grid-template-columns: 1fr;
  }
}

.work-card {
  perspective: 1000px;
  height: 400px;
}

.card-front, .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.6s ease;
}

.card-front {
  background-color: rgba(255,255,255,0.9);
}

.card-back {
  background-color: #8B4513;
  color: #F5F5DC;
  transform: rotateY(180deg);
}

.work-card:hover .card-front,
.work-card.flipped .card-front {
  transform: rotateY(180deg);
}

.work-card:hover .card-back,
.work-card.flipped .card-back {
  transform: rotateY(0deg);
}

.card-image {
  width: 200px;
  height: 200px;
  margin: 1rem 0;
  border-radius: 4px;
  background-color: #D2B48C;
  background-size: cover;
  background-position: center;
  filter: sepia(0.3) grayscale(0.2) contrast(1.1);
  box-shadow: inset 1px 1px 3px rgba(0,0,0,0.2), 1px 1px 2px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

/* 红园 - 古典园林砖雕 */
.red-garden {
  background-image: url('https://ts1.tc.mm.bing.net/th/id/OIP-C.LjTzNkHfU4Y1kx4Y0yxNJAHaEP?rs=1&pid=ImgDetMain&o=7&rm=3');
}

/* 东公馆 - 民国建筑砖雕 */
.east-mansion {
  background-image: url('https://www.zsbeike.com/imgs/I/I09355/i09355.0240.2[3f827964747a].jpg');
}

/* 八坊十三巷 - 街巷民居砖雕 */
.eight-lanes {
  background-image: url('https://ts2.tc.mm.bing.net/th/id/OIP-C.1rVa_Nl5w8GiXfr-6akBnwHaEv?rs=1&pid=ImgDetMain&o=7&rm=3');
}

/* 蝙蝠纹 - 经典吉祥纹样 */
.bat-pattern {
  background-image: url('https://ts1.tc.mm.bing.net/th/id/OIP-C.eHljH_S-b4rivnGFt2DA3AHaF4?rs=1&pid=ImgDetMain&o=7&rm=3');
}

/* 回纹 - 连续回旋的几何纹样 */
.spiral-pattern {
  background-image: url('./19148775_083031845859_2.jpg');
}

/* 鹿鹤同春 - 鹿与鹤的组合纹样 */
.deer-crane {
  background-image: url('https://n.sinaimg.cn/history/transform/20170930/lK9S-fymkwwk7234342.jpg');
}

/* 百子图 - 多个孩童嬉戏的场景 */
.hundred-boys {
  background-image: url('https://ts1.tc.mm.bing.net/th/id/OIP-C.IHhU90BksWjR5BLEo9MyWAHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3');
}

/* 牡丹纹 - 经典吉祥纹样 */
.peony-pattern {
  background-image: url('boguweng.webp');
}

/* 博古纹 - 文人气息纹样 */
.bogu-pattern {
  background-image: url('mudanwen.webp');
}

/* 传承与创新 */
.heritage-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.heritage-item {
  background-color: rgba(255,255,255,0.8);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.heritage-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.heritage-item h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* 联系我们 */
.contact-content {
  background-color: rgba(255,255,255,0.8);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* 360°全景展厅 */
.panorama {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 2000;
  display: none;
  align-items: center;
  justify-content: center;
}

.panorama.active {
  display: flex;
}

.panorama-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.panorama-image {
  width: 500%;
  height: 100%;
  background-image: url('https://p8.ssl.qhimg.com/t01b4b4b4b4b4b4b4b4.jpg');
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  filter: sepia(0.3) grayscale(0.2) contrast(1.1);
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);
}

.panorama-markers {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.marker {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #FFD700;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 10;
}

.marker:hover {
  transform: scale(1.5);
  box-shadow: 0 0 10px #FFD700;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0,0,0,0.5);
  color: #F5F5DC;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: rgba(0,0,0,0.8);
}

/* 标注信息弹窗 */
.marker-info {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255,255,255,0.95);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  z-index: 2100;
  display: none;
  max-width: 400px;
  width: 90%;
}

.marker-info.active {
  display: block;
}

.marker-info h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.close-info {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #8B4513;
  color: #F5F5DC;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-info:hover {
  background-color: #A0522D;
}

/* 可互动砖雕小人 */
.brick-doll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 8vw;
  max-width: 100px;
  min-width: 60px;
  aspect-ratio: 2/3;
  cursor: pointer;
  z-index: 9999;
  transition: transform 0.5s ease;
}

/* 父容器 */
.doll-container {
  position: relative;
  width: 100%;
  height: 100%;
  filter: contrast(1.1);
  background: none;
  box-shadow: none;
  border-radius: 0;
}

/* 砖雕质感基础样式 */
.doll-container * {
  background-color: #A9A9A9;
  box-shadow: inset 3px 3px 5px rgba(0,0,0,0.3), inset -3px -3px 5px rgba(255,255,255,0.1);
  position: absolute;
  z-index: 1;
}

/* 头部 */
.doll-head {
  width: 50%;
  height: 33.33%;
  border-radius: 50%;
  top: 6.67%;
  left: 25%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M15 20 L35 20 M20 25 L30 25 M22 30 L28 30" stroke="%238B4513" stroke-width="1" opacity="0.5"/></svg>');
  background-size: cover;
}

.doll-face {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-radius: 50%;
  box-shadow: none;
  background: none;
}

.doll-hat {
  width: 80%;
  height: 30%;
  top: -10%;
  left: 10%;
  border-radius: 20px 20px 0 0;
}

/* 身体 */
.doll-body {
  width: 60%;
  height: 46.67%;
  top: 40%;
  left: 20%;
  border-radius: 30px 30px 0 0;
}

.doll-clothes {
  width: 66.67%;
  height: 57.14%;
  top: 14.29%;
  left: 16.67%;
  border-radius: 20px 20px 0 0;
  box-shadow: none;
  background: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M10 15 L30 15 M20 15 L20 35" stroke="%238B4513" stroke-width="1" opacity="0.5"/></svg>');
  background-size: cover;
}

/* 手臂 */
.doll-arm {
  width: 15%;
  height: 26.67%;
  top: 46.67%;
  border-radius: 10px;
}

.doll-arm.left {
  left: 15%;
  transform-origin: bottom center;
}

.doll-arm.right {
  right: 15%;
  transform-origin: bottom center;
}

/* 刻刀 */
.doll-knife {
  width: 53.33%;
  height: 50%;
  top: -25%;
  left: 23.33%;
  border-radius: 4px;
  background-color: #8B4513;
  box-shadow: none;
}

/* 腿部 */
.doll-legs {
  width: 40%;
  height: 13.33%;
  top: 86.67%;
  left: 30%;
  border-radius: 0 0 20px 20px;
}

/* 动画效果 */
@keyframes wave {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(30deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(30deg); }
  100% { transform: rotate(0deg); }
}

@keyframes nod {
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

@keyframes sway {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}

.brick-doll:hover {
  animation: sway 2s ease-in-out infinite;
}

.brick-doll:hover .doll-arm.right {
  animation: wave 2s ease-in-out infinite;
}

.brick-doll:hover .doll-head {
  animation: nod 2s ease-in-out infinite;
}

.brick-doll:active {
  transform: scale(0.95);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .brick-doll {
    width: 80px;
    height: 120px;
  }
  
  .doll-head {
    width: 40px;
    height: 40px;
    left: 20px;
  }
  
  .doll-body {
    width: 50px;
    height: 60px;
    left: 15px;
  }
  
  .doll-arm {
    width: 12px;
    height: 35px;
  }
  
  .doll-legs {
    width: 30px;
    height: 15px;
    left: 25px;
  }
}

/* 砖雕小知识弹窗 */
.knowledge-popup {
  position: fixed;
  top: 20px;
  right: 20px;
  transform: none;
  background-color: rgba(255,255,255,0.95);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  z-index: 1100;
  display: none;
  max-width: 400px;
  width: 90%;
}

.knowledge-popup.active {
  display: block;
}

.knowledge-popup h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.close-knowledge {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #8B4513;
  color: #F5F5DC;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-knowledge:hover {
  background-color: #A0522D;
}

/* 引导弹窗 */
.guide-popup {
  position: fixed;
  top: 20px;
  left: 20px;
  transform: none;
  background-color: rgba(255,255,255,0.95);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  z-index: 1100;
  display: none;
  max-width: 400px;
  width: 90%;
}

.guide-popup.active {
  display: block;
}

.guide-popup h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.close-guide {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #8B4513;
  color: #F5F5DC;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-guide:hover {
  background-color: #A0522D;
}

/* 图片放大模态框 */
.image-modal {
  display: none;
  position: fixed;
  z-index: 3000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.8);
}

.image-modal.active {
  display: block;
}

.modal-content {
    position: relative;
    margin: 10% auto;
    padding: 20px;
    width: 90%;
    max-width: 800px;
    text-align: center;
  }

  #modal-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  .close-modal:hover {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 回到顶部按钮 */
  .back-to-top {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    background-color: #8B4513;
    color: #F5F5DC;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 900;
    display: none;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }

  .back-to-top.active {
    display: flex;
  }

  .back-to-top:hover {
    background-color: #A0522D;
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.4);
  }

  /* 朗读中的文字高亮样式 */
  .highlight {
    background-color: #fff399 !important;
    padding: 4px 8px;
    border-radius: 4px;
    /* 移除过渡动画，确保高亮立即显示 */
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background-color: #3E2723;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      transform: translateY(-150%);
      transition: transform 0.3s ease;
    }

    .nav-links.active {
      transform: translateY(0);
    }

    .nav-links li {
      margin: 1rem 0;
    }

    .menu-toggle {
      display: flex;
    }

    .hero h1 {
      font-size: 2.5rem;
    }

    .hero p {
      font-size: 1.2rem;
    }

    .section {
      padding: 4rem 1rem;
    }

    .section h2 {
      font-size: 2rem;
    }

    .brick-doll {
      width: 60px;
      height: 90px;
    }

    .doll-body {
      width: 45px;
      height: 60px;
    }

    .doll-arm {
      width: 10px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero p {
      font-size: 1rem;
    }

    .btn {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }

    .section h2 {
      font-size: 1.8rem;
    }

    .work-card {
      height: 350px;
    }

    .card-image {
      width: 150px;
      height: 150px;
    }
  }
  /* 强制去掉小人所有边框和多余样式 */
  .character-wrapper, 
  .character-wrapper * {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: transparent !important;
  }
  /* 顶部导航强制上下居中排列 */
  header, .header, .navbar {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }

  /* 主标题：增大和下方导航的间距，数字越大间距越大 */
  header h1, .site-title, .logo {
    margin-bottom: 20px !important;
    margin-top: 0 !important;
  }

  /* 导航菜单强制居中 */
  nav, .nav, .nav-menu {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
    margin: 0 !important;
  }
  /* 历史渊源卡片整齐排版 */
  .cards-wrapper, .history-container {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-between !important;
    align-items: stretch !important;
    gap: 30px !important; /* 卡片之间的间距，数字越大间距越大 */
  }

  .history-container .card, .cards-wrapper .card {
    width: 31% !important; /* 每行刚好放3个，留足间距 */
    box-sizing: border-box !important;
    margin: 0 !important;
  }

  /* 手机端适配，自动改成每行1个，不会挤在一起 */
  @media (max-width: 768px) {
    .history-container .card, .cards-wrapper .card {
      width: 100% !important;
    }
  }
  /* 导航栏放大优化 */
  /* 1. 增大导航栏整体高度 */
  header, .header, .navbar {
    padding-top: 25px !important; /* 调大这个数字，导航栏顶部高度更高 */
    padding-bottom: 25px !important; /* 调大这个数字，导航栏底部高度更高 */
  }

  /* 2. 放大导航菜单字体 */
  nav a, .nav-item, .menu-item {
    font-size: 20px !important; /* 调大这个数字，导航字更大，默认一般是16px */
    margin: 0 15px !important; /* 调大这个数字，导航选项之间的间距更大 */
  }

  /* 3. 放大主标题「临夏砖雕」的字体（可选） */
  header h1, .site-title, .logo {
    font-size: 36px !important; /* 调大这个数字，主标题更大 */
  }

  /* 手机端适配，不会挤在一起 */
  @media (max-width: 768px) {
    nav a, .nav-item, .menu-item {
      font-size: 16px !important;
      margin: 0 8px !important;
    }
    header h1, .site-title, .logo {
      font-size: 28px !important;
    }
  }
  /* 临夏砖雕牡丹纹样正文背景 */
  body {
    background-image: url("bg-pattern.png");
    background-repeat: repeat;       /* 让图案平铺铺满整个页面 */
    background-size: 600px;          /* 控制图案大小，数字越小图案越密，越大越疏 */
    background-color: #f8f5e6;       /* 暖米色底色，和砖雕风格更搭 */
    background-attachment: fixed;    /* 让背景固定，滚动页面时图案不动 */
  }

  /* 给内容区域加半透明白色遮罩，保证文字清晰可读 */
  .container, section, .content {
    background-color: rgba(255, 255, 255, 0.9); /* 0.9 是透明度，越接近1越不透明 */
    padding: 25px;
    border-radius: 12px;
    margin: 20px auto;
  }
  /* 临夏砖雕牡丹纹样——整页背景（单张铺满） */
  body {
    background-image: url("bg-pattern.png");
    background-repeat: no-repeat;    /* 不重复，只用一张图 */
    background-size: cover;          /* 自动缩放，铺满整个浏览器窗口 */
    background-position: center;      /* 图片居中显示 */
    background-attachment: fixed;    /* 滚动页面时背景固定不动 */
    background-color: #f8f5e6;       /* 暖米色底色，和纹样风格匹配 */
  }

  /* 内容区域半透明白色，保证文字清晰 */
  .container, section, .content {
    background-color: rgba(255, 255, 255, 0.75) !important;
    padding: 25px;
    border-radius: 12px;
    margin: 20px auto;
  }

  /* 给内容区域加半透明白色遮罩，保证文字清晰可读 */
  .container, section, .content {
    background-color: rgba(255, 255, 255, 0.9); /* 0.9 是透明度，越接近1越不透明 */
    padding: 25px;
    border-radius: 12px;
    margin: 20px auto;
  }
  /* 把内容区域白色背景完全透明化 */
  .container, section, .content, .card-container {
    background-color: transparent !important;
    /* 保留原有的内边距和圆角，不破坏布局 */
    padding: 25px;
    border-radius: 12px;
    margin: 20px auto;
  }

  /* 让卡片也变成半透明，避免文字被背景淹没 */
  .card {
    background-color: rgba(255, 255, 255, 0.7) !important;
  }
  /* 朗读中的文字高亮样式 */
  [data-speech-id].speaking {
    background-color: rgba(255, 215, 0, 0.3) !important; /* 半透金色 */
    border-left: 4px solid #d4af37;
    transition: all 0.3s ease;
  }
  /* 朗读时高亮当前文字 */
  .highlight {
    background-color: #fff399 !important;
    padding: 4px 8px;
    border-radius: 4px;
    /* 移除过渡动画，确保高亮立即显示 */
  }
  /* 精准匹配你所有的卡片，自动加流金边框，100%不遮挡内容 */
  /* 选中所有带标题和图片的卡片容器，绝对不会误选内部的图片/文字 */
  /* 排除首页和联系我们部分 */
  div:has(> p, > img, > h3, > .card-image):not(.hero-content):not(.contact-content) {
    /* 边框粗细，3px清晰可见，想要更粗改成4px，更细改成2px */
    border: 3px solid transparent !important;
    /* 圆角和你的卡片完全贴合，可按需修改 */
    border-radius: 12px !important;
    /* 核心：内部完全透明，透过去你原本的卡片背景/图片/文字，仅边框是流金渐变 */
    background: 
      linear-gradient(transparent, transparent) padding-box,
      linear-gradient(45deg, #d4af37, #f4e4bc, #b8860b, #daa520, #d4af37, #f4e4bc) border-box !important;
    background-size: 300% 300% !important;
    /* 流动动画，6s是速度，改4s更快，8s更慢 */
    animation: goldFlow 6s ease-in-out infinite !important;
    /* 金色发光，让边框更明显，不想要可以删掉这行 */
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.5) !important;
    /* 完全不影响内部的内容 */
    overflow: visible !important;
  }

  /* 流金流动动画，不能删除 */
  @keyframes goldFlow {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 25%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 75%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
