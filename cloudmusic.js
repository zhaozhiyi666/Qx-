// 2024-01-07 14:05

let header = $request.headers;
const isQuanX = typeof $task !== "undefined";

if (isQuanX) {
  header["MConfig-Info"] = '{"zr4bw6pKFDIZScpo":{"version":1259520,"appver":"8.10.81"},"tPJJnts2H31BZXmp":{"version":2615296,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":29302784,"appver":"8.10.81"}}';
  header["User-Agent"] = 'NeteaseMusic 8.10.81/4488 (iPhone; iOS 17.1; zh_CN)';
  header["Cookie"] = 'MUSIC_U=0095766D599118B7C6031892B533D8E02EADDC5314E6671B1E695B69F4E597399BAEBEFD89831F6FFEC39F6E4C6C14BD2D5113EF66C77B7418573F36968201DF16BC36B72E59C6275879382C17DAB73A4D61BFC90D2DCE5172227D981F625FC0CB7BA653CE4C1C3DD587D55748F42993FEA2892EBA6A668444FE54AE35959AFEE1336F13201F424007D22FBD641A19F848D3A22FCDFCEC6438F03D0215922AC1D9A7407EBA540221C742BCC6711A9731589429193D4CB12A9F6835645DD5A8E70A087E1041589E7A13305580FB43B74917E58E0860622F784A789C18025623F3FB8C5767C260839774B2E2A2590535EFEC70F44D22F0CEE23A0C24E96F45DA6AB2368DD99F08E2619ECD0CCDAACCB45B03A13ED7B0A9A6ABA7337F38ADC45292D63508A155D7A15608412BCAF492BB40A1DC4FA511323AF0753D86CC51CBB88793C6447C09171DD8FA4E53E09495DC4D3EE4ECA698E275DE0BB040EB5822093D93473F0FA3F6FD5B88FC2ACF4128C453EDD78E0A20F72E8715E06E2703812CA2D6; NMTID=00OoBz5-DAtrJco6kZslRMEUuIEK3QAAAGAuuP3wA; caid={"lastIyunId":"1bcfeb0c1516608e1a18f7dda7726649","iyunId":"2d71784f2fbfb5d84bd1e99db53fb3c2","iyunVersion":"20230330","lastIyunVersion":"20220111"}; buildver=4488; sDeviceId=926defe4c5222a0a52bb085f891b2376; channel=distribution; idfa=00000000-0000-0000-0000-000000000000; packageType=release; appver=8.10.81; deviceId=926defe4c5222a0a52bb085f891b2376; EVNSM=1.0.0; os=iPhone OS; osver=17.1; machineid=iPhone14.2; NMCID=rkuujm.1652402943000.01.3; appkey=IuRPVVmc3WWul9fT; idfv=D49D04A6-1728-4421-A534-87EECFC2F093; URS_APPID=A556E55AE4AA7B14B8B9BD2BC90BD80E295FA7A80C00CB467F55D9CDBEA7DE00FFE6C6BFD71E396E78C7602A71EA459C; NMDI=Q1NKTQcBDACCVVEWJj2ZdMxB61uVAAAA7XIiDlqvi%2FYBjm5V7nVLRVGgTU%2FgPxsCJIJHdjGr4jizIYWJ4AGoMllZK0JwgvqfylT82dHRtlX%2Be6iaFz%2BMcJnGMvpc1gOhqEUk7lPS6wZ4FI7fphoUAS6o4juVo3c3TD7KMLrjXanPkWRcxmHKvIJBF4xTClDq1h8BugewuvsyhJVwXkDrAR1Y4lK33oS6NvdynJ4%3D';
} else {
  headers["mconfig-info"] = '{"zr4bw6pKFDIZScpo":{"version":1259520,"appver":"8.10.81"},"tPJJnts2H31BZXmp":{"version":2615296,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":29302784,"appver":"8.10.81"}}';
  headers["user-agent"] = 'NeteaseMusic 8.10.81/4488 (iPhone; iOS 17.1; zh_CN)';
  headers["cookie"] = 'MUSIC_U=0095766D599118B7C6031892B533D8E02EADDC5314E6671B1E695B69F4E597399BAEBEFD89831F6FFEC39F6E4C6C14BD2D5113EF66C77B7418573F36968201DF16BC36B72E59C6275879382C17DAB73A4D61BFC90D2DCE5172227D981F625FC0CB7BA653CE4C1C3DD587D55748F42993FEA2892EBA6A668444FE54AE35959AFEE1336F13201F424007D22FBD641A19F848D3A22FCDFCEC6438F03D0215922AC1D9A7407EBA540221C742BCC6711A9731589429193D4CB12A9F6835645DD5A8E70A087E1041589E7A13305580FB43B74917E58E0860622F784A789C18025623F3FB8C5767C260839774B2E2A2590535EFEC70F44D22F0CEE23A0C24E96F45DA6AB2368DD99F08E2619ECD0CCDAACCB45B03A13ED7B0A9A6ABA7337F38ADC45292D63508A155D7A15608412BCAF492BB40A1DC4FA511323AF0753D86CC51CBB88793C6447C09171DD8FA4E53E09495DC4D3EE4ECA698E275DE0BB040EB5822093D93473F0FA3F6FD5B88FC2ACF4128C453EDD78E0A20F72E8715E06E2703812CA2D6; NMTID=00OoBz5-DAtrJco6kZslRMEUuIEK3QAAAGAuuP3wA; caid={"lastIyunId":"1bcfeb0c1516608e1a18f7dda7726649","iyunId":"2d71784f2fbfb5d84bd1e99db53fb3c2","iyunVersion":"20230330","lastIyunVersion":"20220111"}; buildver=4488; sDeviceId=926defe4c5222a0a52bb085f891b2376; channel=distribution; idfa=00000000-0000-0000-0000-000000000000; packageType=release; appver=8.10.81; deviceId=926defe4c5222a0a52bb085f891b2376; EVNSM=1.0.0; os=iPhone OS; osver=17.1; machineid=iPhone14.2; NMCID=rkuujm.1652402943000.01.3; appkey=IuRPVVmc3WWul9fT; idfv=D49D04A6-1728-4421-A534-87EECFC2F093; URS_APPID=A556E55AE4AA7B14B8B9BD2BC90BD80E295FA7A80C00CB467F55D9CDBEA7DE00FFE6C6BFD71E396E78C7602A71EA459C; NMDI=Q1NKTQcBDACCVVEWJj2ZdMxB61uVAAAA7XIiDlqvi%2FYBjm5V7nVLRVGgTU%2FgPxsCJIJHdjGr4jizIYWJ4AGoMllZK0JwgvqfylT82dHRtlX%2Be6iaFz%2BMcJnGMvpc1gOhqEUk7lPS6wZ4FI7fphoUAS6o4juVo3c3TD7KMLrjXanPkWRcxmHKvIJBF4xTClDq1h8BugewuvsyhJVwXkDrAR1Y4lK33oS6NvdynJ4%3D';
}

$done({ headers: header });