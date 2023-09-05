$(function (){
  // 文字色変化ボタンを押したら青に変わる
  $('#change-color').on('click', () => {
    $('#target').css('color', 'blue');
  });
  // 文字内容変化ボタンを押したら「こんばんは!」に変わる
  $('#change-text').on('click', () => {
    $('#target').text('こんばんは！');
  });
  // フェードアウトボタンを押したら文字が２秒かけてフェードアウトする
  $('#fade-out').on('click', () => {
    $('#target').fadeOut(2000);
  });
  // フェードインボタンを押したら文字がフェードインする
  $('#fade-in').on('click', () => {
    $('#target').fadeIn();
  });
});