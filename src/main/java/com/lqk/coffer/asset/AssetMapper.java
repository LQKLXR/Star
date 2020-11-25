package com.lqk.coffer.asset;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description
 */
@Mapper
@Repository
public interface AssetMapper {

    /**
     * 插入一个新的 资产类型
     * @param asset
     * @return
     */
    public int insertAsset(Asset asset);

    /**
     * 更改
     * @param assetId
     * @param changedAmount
     * @return
     */
    public int changeAmount(@Param("changedAmount") BigDecimal changedAmount, @Param("assetId") Integer assetId);

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
