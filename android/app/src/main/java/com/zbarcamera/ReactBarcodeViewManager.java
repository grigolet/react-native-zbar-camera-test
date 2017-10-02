package com.zbarcamera;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import me.dm7.barcodescanner.zbar.Result;
import me.dm7.barcodescanner.zbar.ZBarScannerView;

public class ReactBarcodeViewManager extends SimpleViewManager<ZBarScannerView> {
    public static final String REACT_CLASS = "ZBarCamera";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public ZBarScannerView createViewInstance(final ThemedReactContext context) {
        final ZBarScannerView mScannerView = new ZBarScannerView(context);
        mScannerView.startCamera();
        mScannerView.setResultHandler(new ZBarScannerView.ResultHandler() {
            @Override
            public void handleResult(Result result) {
                WritableMap event = Arguments.createMap();
                event.putString("barcode", result.getContents());
                context.getJSModule(RCTEventEmitter.class).receiveEvent(
                        mScannerView.getId(),
                        "topChange",
                        event
                );
            }
        });
        return mScannerView;
    }

}