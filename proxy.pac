function FindProxyForURL(url, host) {
	var proxy1 = "PROXY 127.0.0.1:8887";
	var proxy2 = "PROXY 127.0.0.1:8888";
	
    //本地地址直接连接
	if (isPlainHostName(host)) {
        return "DIRECT";
    }
	// 代理1
	if (shExpMatch(url, "*wps.cn**")) {
        return proxy1;
    }
	// 代理2
	if (shExpMatch(url, "*csdn.com*")) {
	   return proxy2;
	}
    return proxy1;
}
