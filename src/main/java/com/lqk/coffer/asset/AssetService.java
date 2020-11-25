package com.lqk.coffer.asset;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description
 */
public interface AssetService {

    /**
     * 插入一个新的 资产类型
     * @param asset
     * @return
     */
    public int insertAsset(Asset asset);

    /**
     * 资产转移
     * @param changedAmount 变动的数值
     * @param fromAssetId 从哪个资产ID来的
     * @param toAssetId 到哪个资产ID去的
     * @return
     */
    public int changeAmount(BigDecimal changedAmount, Integer fromAssetId, Integer toAssetId);

    /**
     * 资产收入/支出
     * @param changedAmount 收入/支出的数值
     * @param assetId 收入/支出的资产ID
     * @return
     */
    public int changeAmount(BigDecimal changedAmount, Integer assetId);


    /**
     * 获得一个用户的全部资产列表
     * @param accountId 用户ID
     * @return
     */
    public List<Asset> getAssetList(Integer accountId);

    /**
     * 删除一个资产
     * @param assetId
     */
    public void deleteAsset(Integer assetId);
}
