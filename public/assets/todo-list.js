$(document).ready(function() {

    /*$('form.addForm').on('submit', function(event) {
        event.preventDefault();
        var item = $('form.addForm input');
        var todo = { item: item.val().trim() };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });*/

    $('form.correctForm').on('submit', function(event) {
        event.preventDefault();
        var oldItem = $('form.correctForm input.oldItem').val().trim().replace(/ /g, "-");
        var newItem = $('form.correctForm input.newItem').val().trim().replace(/ /g, "-");
        var todo = {oldItem, newItem};

        $.ajax({
          type: 'POST',
          url: '/todo/' + oldItem,
          data: todo,
          success: function(data) {
            location.reload();
          }
        })
    });

    $('li').on('click', function() {
        var item = $(this).text().trim().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});

var f = function() {
  var _ = NEJ.P,
  _e = _('nej.e'),
  _v = _('nej.v'),
  _j = _('nej.j'),
  _u = _('nej.u'),
  _p = _('nej.ut.j'),

  // 获取节点
  var addForm = _e._$get('addForm');
  var addInput = _e._$get('addItem');
  var correctForm = _e._$get('correctForm');
  var oldItem = _e._$get('oldItem');
  var newItem = _e._$get('newItem');

  _v._$addEvent(addForm, 'submit', function(event) {
    event.preventDefault();
    var item = addInput;
    var todo = { item: item.val().trim() };

    _j._$_proXHRProxy.__doSendRequest('/todo',{
      method: 'post',
      data: todo,
      onload: function(data) {
        // location.reload()
        console.log('成功')
      }
    })

    return false;
  })
}
define(['{lib}base/event.js','{lib}util/ajax/xdr.js','{lib}util/ajax/proxy/xhr.js'],f);