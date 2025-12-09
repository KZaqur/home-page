// main.js - 控制 QQ 模态弹窗的显示与无障碍属性
(function(){
  const qqBtn = document.getElementById('qqBtn');
  const qqModal = document.getElementById('qqModal');
  const qqClose = document.getElementById('qqClose');

  function openModal(){
    qqModal.setAttribute('aria-hidden', 'false');
    // focus 管理
    qqClose.focus();
    // 阻止背景滚动
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    qqModal.setAttribute('aria-hidden', 'true');
    qqBtn.focus();
    document.body.style.overflow = '';
  }

  qqBtn.addEventListener('click', openModal);
  qqClose.addEventListener('click', closeModal);

  // 点击遮罩关闭
  qqModal.addEventListener('click', function(e){
    if(e.target === qqModal) closeModal();
  });

  // 键盘关闭（Esc）
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && qqModal.getAttribute('aria-hidden') === 'false'){
      closeModal();
    }
  });
})();
