/* 针对 新建 收入/支出/转移 的弹出框的 js 代码*/
function closePop() {
    /* 隐藏遮罩层 */
    document.getElementById("popLayer").style.display = "none";
    /* 隐藏弹出层中的提示信息 */
    document.getElementById("popInfo").style.display = "none";
    /* 隐藏弹出层中的卡片信息 */
    document.getElementById("popContent").style.display = "none";
    /* 隐藏整个弹出层 */
    document.getElementById("popBox").style.display = "none";
    console.log("close pop");
}

/* 调整 display  */
function openPop() {
    /* 开启遮罩层 */
    document.getElementById("popLayer").style.display = "block";
    /* 开启弹出层中的提示信息 */
    document.getElementById("popInfo").style.display = "block";
    document.getElementById("popInfo").innerHTML = "请稍候...";
    /* 开启整个弹出层 */
    document.getElementById("popBox").style.display = "block";
}

/* 获得用户的全部钱包 */
function getAssetList() {
    var assetList;
    $.ajax({
        url: "/getAssetList",
        type: "get",
        async: false,
        success: function (data) {
            assetList = data;
        }
    });
    return assetList;
}

/* 新的收入弹出层内容 */
function popNewIncome() {
    /* 遮罩层和弹出层的显示 */
    openPop();
    /* 获得钱包的列表 */
    var assetList = getAssetList();
    /* 根据钱包列表组装钱包选择下拉框 HTML */
    var assetIdInnerHtml = "<option value='-1'>请选择收入钱包</option>";
    for (var i = 0; i < assetList.length; i++) {
        assetIdInnerHtml = assetIdInnerHtml + "<option value = " + assetList[i].assetId + ">" + "<div id='" + "selectAsset" + assetList[i].assetId + "'>" + assetList[i].name + "</div>" + "</option>";
    }
    /* 组装完毕 */

    /* 弹出的新建收入卡片层 */
    var content = "		<div id='popIncomeContent' style='display: block;'> \
								<h5 class='card-title' style='text-align: center;'>新的收入</h5>\
								<form>\
								    <div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>选择钱包</label>\
										<div class='col-sm-9'>\
											<select class='custom-select' id='assetId' required='required'>\
											</select>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>收入来源</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写收入来源' id='linkedAccount' required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>收入金额</label>\
										<div class='col-sm-9'>\
											<input type='number' class='form-control' placeholder='填写收入金额' id='amount' required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>原因</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写原因(可选)' id='reason'/>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>备注</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写备注(可选)' id='note'/>\
										</div>\
									</div>\
								</form>\
								<h6 style='text-align: center; color: #ff0000; display: none' id='popError'></h6>\
								<!-- 提交按钮 -->\
								<div style='text-align: center;'>\
									<button type='button' class='btn btn-success sweet-success' onclick='commitNewRecord(1)'>提交</button>\
									<button type='button' class='btn btn-secondary' onclick='closePop()'>关闭</button> \
								</div>\
							</div>"
    /* 卡片内填上 新建收入的各个选项 */
    document.getElementById("popContent").innerHTML = content;
    /* 组装上其中的钱包选项 */
    document.getElementById("assetId").innerHTML = assetIdInnerHtml;

    /* 显示出来 */
    document.getElementById("popInfo").style.display = "none";
    document.getElementById("popContent").style.display = "block";
}

/* 新的支出弹出层内容 */
function popNewExpend() {
    /* 遮罩层和弹出层的显示 */
    openPop();
    /* 获得钱包的列表 */
    var assetList = getAssetList();
    /* 根据钱包列表组装钱包选择下拉框 HTML */
    var assetIdInnerHtml = "<option value='-1'>请选择支出钱包</option>";
    for (var i = 0; i < assetList.length; i++) {
        assetIdInnerHtml = assetIdInnerHtml + "<option value = " + assetList[i].assetId + ">" + "<div id='" + "selectAsset" + assetList[i].assetId + "'>" + assetList[i].name + "</div>" + "</option>";
    }

    /* 组装完毕 */
    var content = "		<!-- 新建支出卡片内容 -->\
							<div id='popExpendContent' style='display: block;'>\
								<h5 class='card-title' style='text-align: center;'>新的支出</h5>\
								<form>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>支出钱包</label>\
										<div class='col-sm-9'>\
											<select class='custom-select' required='required' id='assetId'>\
											</select>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>支出到</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写支出到何处' id='linkedAccount' required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>支出金额</label>\
										<div class='col-sm-9'>\
											<input type='number' class='form-control' placeholder='填写支出金额（最多两位小数）' id='amount'  required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>原因</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写原因(可选)' id='reason'/>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>备注</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写备注(可选)' id='note'/>\
										</div>\
									</div>\
								</form>\
								<h6 style='text-align: center; color: #ff0000; display: none' id='popError'></h6>\
								<!-- 提交按钮 -->\
								<div style='text-align: center;'>\
									<button type='button' class='btn btn-success sweet-success' onclick='commitNewRecord(2)'>提交</button>\
									<button type='button' class='btn btn-secondary' onclick='closePop()'>关闭</button> \
								</div>\
							</div>";
    /* 卡片内填上 新建收入的各个选项 */
    document.getElementById("popContent").innerHTML = content;
    /* 组装上其中的钱包选项 */
    document.getElementById("assetId").innerHTML = assetIdInnerHtml;

    /* 显示出来 */
    document.getElementById("popInfo").style.display = "none";
    document.getElementById("popContent").style.display = "block";
}

/* 新的金钱转移弹出层内容 */
function popTransfer() {

    /* 遮罩层和弹出层的显示 */
    openPop();
    /* 获得钱包的列表 */
    var assetList = getAssetList();
    /* 根据钱包列表组装钱包选择下拉框 HTML */
    var assetIdInnerHtml = "<option value='-1'>请选择钱包</option>";
    for (var i = 0; i < assetList.length; i++) {
        assetIdInnerHtml = assetIdInnerHtml + "<option value = " + assetList[i].assetId + ">" + "<div id='" + "selectAsset" + assetList[i].assetId + "'>" + assetList[i].name + "</div>" + "</option>";
    }

    var content = "<!-- 新建金钱转移卡片内容 -->\
							<div id='popTransferContent' style='display: block;'>\
								<h5 class='card-title' style='text-align: center;'>金钱转移</h5>\
								<form>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>选择转出钱包</label>\
										<div class='col-sm-9'>\
											<select class='custom-select' id='assetId1' required='required'>\
											</select>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>选择转入钱包</label>\
										<div class='col-sm-9'>\
											<select class='custom-select' id='assetId2' required='required'>\
											</select>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>转移金额</label>\
										<div class='col-sm-9'>\
											<input type='number' class='form-control' placeholder='填写转移金额（最多两位小数）' id='amount' required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>原因</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写原因(可选)' id='reason'/>\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>备注</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写备注(可选)' id='note'/>\
										</div>\
									</div>\
								</form>\
								<h6 style='text-align: center; color: #ff0000; display: none' id='popError'></h6>\
								<!-- 提交按钮 -->\
								<div style='text-align: center;'>\
									<button type='button' class='btn btn-success sweet-success' onclick='commitNewRecord(3)'>提交</button>\
									<button type='button' class='btn btn-secondary' onclick='closePop()'>关闭</button> \
								</div>\
							</div>";

    /* 卡片内填上 新建收入的各个选项 */
    document.getElementById("popContent").innerHTML = content;
    /* 组装上其中的钱包选项 */
    document.getElementById("assetId1").innerHTML = assetIdInnerHtml;
    document.getElementById("assetId2").innerHTML = assetIdInnerHtml;
    /* 显示出来 */
    document.getElementById("popInfo").style.display = "none";
    document.getElementById("popContent").style.display = "block";
}

/* 提交新的记录 */
function commitNewRecord(type) {
    var amount = document.getElementById("amount").value;
    if (amount <= 0) {
        document.getElementById("popError").style.display = "block";
        document.getElementById("popError").innerHTML = "金额必须大于0!";
        return;
    }
    var reason = document.getElementById("reason").value;
    var note = document.getElementById("note").value;
    switch (type) {
        //提交收入
        case 1:
            var type = 1;
            var linkedAccount = document.getElementById("linkedAccount").value;
            var assetId = document.getElementById("assetId").value;
            var record = {
                recordId: 0,
                type: type,
                linkedAccount: linkedAccount,
                amount: amount,
                reason: reason,
                note: note,
                dateTime: "",
                assetId: assetId,
                accountId: 0
            };
            insertRecord(record);
            break;
        //提交支出
        case 2:
            var type = 2;
            var linkedAccount = document.getElementById("linkedAccount").value;
            var assetId = document.getElementById("assetId").value;
            var record = {
                recordId: 0,
                type: type,
                linkedAccount: linkedAccount,
                amount: 0 - amount,
                reason: reason,
                note: note,
                dateTime: "",
                assetId: assetId,
                accountId: 0
            };
            insertRecord(record);
            break;
        case 3:
            var assetId1 = document.getElementById("assetId1").value;
            var assetId2 = document.getElementById("assetId2").value;
            if (assetId1 == assetId2) {
                document.getElementById("popError").style.display = "block";
                document.getElementById("popError").innerHTML = "转账必须是不同的钱包!";
                return;
            }
            var linkedAccount1 = document.getElementById("asset" + assetId1).innerHTML;
            var linkedAccount2 = document.getElementById("asset" + assetId2).innerHTML;
            /* 1号钱包转出 */
            var record1 = {
                recordId: 0,
                type: 4,
                linkedAccount: linkedAccount2,
                amount: 0 - amount,
                reason: reason,
                note: note,
                dateTime: "",
                assetId: assetId1,
                accountId: 0
            };
            /* 2号钱包转入 */
            var record2 = {
                recordId: 0,
                type: 3,
                linkedAccount: linkedAccount1,
                amount: amount,
                reason: reason,
                note: note,
                dateTime: "",
                assetId: assetId2,
                accountId: 0
            }
            insertRecord(record1);
            insertRecord(record2);
            break;
    }
}

/* 被提交调用，进行数据库插入 */
function insertRecord(record) {
    var recordJson = JSON.stringify(record);
    $.ajax({
        url: "/insertRecord",
        type: "post",
        data: recordJson,
        contentType: "application/json;charset=utf-8",
        headers: {"Content-Type": "application/json"},
        async: false,
        success: function (data) {
            if (data == "success") {
                console.log(data);
                closePop();
                alert("操作成功");
                /* 刷新记录列表（暴力刷新，可以考虑为只在前端口放点东西） */
                refreshAllRecordList();
                refreshWalletList();
            } else {
                alert("操作失败");
            }
        }
    });

}

/* 新建钱包的弹框 */
function popNewAsset() {
    /* 遮罩层和弹出层的显示 */
    openPop();
    var content = "		<div id='popNewAsset' style='display: block;'> \
								<h5 class='card-title' style='text-align: center;'>新的钱包</h5>\
								<form>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>新钱包名称</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写新钱包名称' id='newAssetName' required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>新钱包金额</label>\
										<div class='col-sm-9'>\
											<input type='number' class='form-control' placeholder='填写收入金额' id='amount' required='required' />\
										</div>\
									</div>\
									<div class='form-group row'>\
										<label class='col-sm-2 col-form-label'>备注</label>\
										<div class='col-sm-9'>\
											<input type='text' class='form-control' placeholder='填写备注(可选)' id='note'/>\
										</div>\
									</div>\
								</form>\
								<h6 style='text-align: center; color: #ff0000; display: none' id='popError'></h6>\
								<!-- 提交按钮 -->\
								<div style='text-align: center;'>\
									<button type='button' class='btn btn-success sweet-success' onclick='commitNewAsset()'>提交</button>\
									<button type='button' class='btn btn-secondary' onclick='closePop()'>关闭</button> \
								</div>\
							</div>"
    /* 卡片内填上 新建收入的各个选项 */
    document.getElementById("popContent").innerHTML = content;
    /* 显示出来 */
    document.getElementById("popInfo").style.display = "none";
    document.getElementById("popContent").style.display = "block";

}

/* 提交新的钱包 */
function commitNewAsset() {
    var amount = document.getElementById("amount").value;
    if (amount <= 0) {
        document.getElementById("popError").style.display = "block";
        document.getElementById("popError").innerHTML = "金额必须大于0!";
        return;
    }
    var name = document.getElementById("newAssetName").value;
    var note = document.getElementById("note").value;
    var newAsset = {
        assetId : 0,
        name : name,
        amount : amount,
        note : note,
        createTime : "",
        accountId : 0
    };
    $.ajax({
        url : "/insertAsset",
        type : "post",
        data : JSON.stringify(newAsset),
        contentType: "application/json;charset=utf-8",
        headers: {"Content-Type": "application/json"},
        async : false,
        success: function (data) {
            if (data == "success") {
                console.log(data);
                closePop();
                alert("操作成功");
                refreshWalletList();
            } else {
                alert("操作失败");
            }
        }
    })
}