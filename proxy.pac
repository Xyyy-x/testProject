function FindProxyForURL(url, host) {
	var proxy1 = "PROXY 192.168.6.6:6666";
	var proxy2 = "PROXY 222.22.66.222:6666";
	
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
    return proxy2;
}
