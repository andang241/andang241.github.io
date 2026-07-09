---
title: "SOC căn bản — Phần 2: Log là nguyên liệu"
date: 2026-07-03 09:00:00 +0700
categories: [soc]
tags: [soc, log, siem]
series: "SOC căn bản"
series_part: 2
---

Không có log thì không có gì để giám sát. Phần này nói về log — thứ SOC "ăn" mỗi ngày.

## Các nguồn log quan trọng

- **Endpoint** — Windows Event Log, Sysmon, EDR.
- **Network** — firewall, proxy, DNS, IDS/IPS.
- **Xác thực & ứng dụng** — VPN, AD, web server.

## Đọc một dòng log

Ví dụ một dòng log xác thực:

```text
2026-07-03T09:12:01Z host=web01 user=admin action=login result=fail src=203.0.113.5
```

Nếu `result=fail` lặp lại nhiều lần trong thời gian ngắn từ cùng một `src`, rất
có thể đó là dấu hiệu **brute-force**.

> Phần 3: biến những dòng log này thành **cảnh báo** thực sự hữu ích.
