$(document).ready(
    refreshWalletList(),
    refreshAllRecordList()
);
/* 刷新记录列表 - 全部记录 */
function refreshAllRecordList() {
    var recordListInnerHtml = "";
    $.ajax({
        url : "/getAllRecord",
        type : "get",
        async : false,
        success : function (data) {
            for (var i = 0; i < data.length; i++){
                var currentRecordAsset = document.getElementById("asset" + data[i].assetId).innerHTML;
                var reason = "";
                var note = "";
                if(data[i].reason == ""){
                    reason = "无";
                }
                else {
                    reason = data[i].reason;
                }
                if(data[i].note == ""){
                    note = "无"
                }
                else {
                    note = data[i].note;
                }
                switch (data[i].type) {
                    case 1:
                        recordListInnerHtml = recordListInnerHtml +
                            "<div class='alert alert-success' role='alert'>" +
                            " 从  <strong>" + data[i].linkedAccount + "</strong>  收入到  <strong>" + currentRecordAsset + "  </strong></br>" +
                            "金额：<strong>"+ data[i].amount + "  </strong>元</br>" +
                            "原因：" + reason + "</br>" +
                            "备注：" + note + "</br>" +
                            "记录时间 ：" + data[i].dateTime +
                            "</div>"
                        break;
                    case 2:
                        recordListInnerHtml = recordListInnerHtml +
                            "<div class='alert alert-danger' role='alert'>" +
                            " 从  <strong>"+ currentRecordAsset + "</strong>  支出到  <strong>  " + data[i].linkedAccount + "  </strong></br>" +
                            "金额：<strong>"+ data[i].amount + "  </strong>元</br>" +
                            "原因：" + reason + "</br>" +
                            "备注：" + note + "</br>" +
                            "记录时间 ：" + data[i].dateTime +
                            "</div>"
                        break;
                    case 3:
                        recordListInnerHtml = recordListInnerHtml +
                            "<div class='alert alert-warning' role='alert'>" +
                            " 从 <strong>"+ data[i].linkedAccount + "</strong>  转入到  <strong>  " + currentRecordAsset + "  </strong></br>" +
                            "金额：<strong>"+ data[i].amount + "  </strong>元</br>" +
                            "原因：" + reason + "</br>" +
                            "备注：" + note + "</br>" +
                            "记录时间 ：" + data[i].dateTime +
                            "</div>"
                        break;
                    case 4:
                        recordListInnerHtml = recordListInnerHtml +
                            "<div class='alert alert-warning' role='alert'>" +
                            " 从 <strong>"+ currentRecordAsset + "</strong>  转出到  <strong>  " + data[i].linkedAccount + "  </strong></br>" +
                            "金额：<strong>"+ data[i].amount + "  </strong>元</br>" +
                            "原因：" + reason + "</br>" +
                            "备注：" + note + "</br>" +
                            "记录时间 ：" + data[i].dateTime +
                            "</div>"
                        break;
                }
            }
        }
    })
    document.getElementById("recordList").innerHTML = recordListInnerHtml;
}

/* 刷新钱包列表 */
function refreshWalletList() {
    var assetList = getAssetList();
    var assetListInnerHtml = "";
    for (var i = 0; i < assetList.length; i++){
        var deleteString = "javascript:deleteAsset(" + assetList[i].assetId + ")";
        assetListInnerHtml = assetListInnerHtml +
            "<div class='alert alert-info' role='alert' >" +
            "<div id='asset" + assetList[i].assetId + "'>" + assetList[i].name + "</div>"+
            "  ¥  " + assetList[i].amount + "元" +
            "<a href=" + deleteString + " style='float: right'>删除</a>"+
            "</div>"
    }
    document.getElementById("assetList").innerHTML = assetListInnerHtml;
}

/* 删除一个钱包 */
function deleteAsset(assetId) {
    $.ajax({
        url: "/deleteAsset?assetId=" + assetId,
        type: "get",
        success:function (data) {
            if(data == "success"){
                alert("操作成功");
                refreshWalletList();
            }
        }
    })
}