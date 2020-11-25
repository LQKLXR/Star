package com.lqk.coffer.asset;

import com.lqk.coffer.record.Record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description
 */
@Service
public class AssetServiceImpl implements AssetService{

    @Autowired
    private AssetMapper assetMapper;

    @Override
    public int insertAsset(Asset asset) {
        return assetMapper.insertAsset(asset);
    }

    @Override
    public int changeAmount(BigDecimal changedAmount, Integer fromAssetId, Integer toAssetId) {
        // 先减掉
        assetMapper.changeAmount(new BigDecimal(0).subtract(changedAmount), fromAssetId);
        // 再加上
        assetMapper.changeAmount(changedAmount, toAssetId);
        return 1;
    }

    @Override
    public int changeAmount(BigDecimal changedAmount, Integer assetId) {
        assetMapper.changeAmount(changedAmount, assetId);
        return 1;
    }

    @Override
    public List<Asset> getAssetList(Integer accountId) {
        return assetMapper.getAssetList(accountId);
    }

    @Override
    public void deleteAsset(Integer assetId) {
        assetMapper.deleteAsset(assetId);
    }
}
