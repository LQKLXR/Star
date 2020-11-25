package com.lqk.coffer.asset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/19
 * @Description
 */
@RestController
public class AssetController {

    @Autowired
    private AssetService assetService;

    @GetMapping("/getAssetList")
    public List<Asset> getAssetList(HttpSession session){
        Integer accountId = (Integer) session.getAttribute("accountId");
        return assetService.getAssetList(accountId);
    }


    @PostMapping("/insertAsset")
    public String insertAsset(@RequestBody Asset asset, HttpSession session){
        Integer accountId = (Integer) session.getAttribute("accountId");
        asset.setCreateTime(new Timestamp(System.currentTimeMillis()));
        asset.setAccountId(accountId);
        assetService.insertAsset(asset);
        return "success";
    }

    @GetMapping("/deleteAsset")
    public String deleteAsset(Integer assetId){
        assetService.deleteAsset(assetId);
        return "success";
    }
}
