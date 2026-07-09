---
title: "SOC căn bản — Phần 3: Từ log tới cảnh báo"
date: 2026-07-05 09:00:00 +0700
categories: [soc]
tags: [soc, detection, alert]
series: "SOC căn bản"
series_part: 3
---

Có log rồi, làm sao biến chúng thành **cảnh báo (alert)** đáng để analyst xem?

## Detection rule đơn giản

Quy tắc ví dụ: *"5 lần đăng nhập thất bại trong 1 phút từ cùng một IP"* → sinh
cảnh báo nghi ngờ brute-force.

## Giảm false positive

Cảnh báo nhiều mà sai thì analyst sẽ "mù cảnh báo". Vài cách giảm nhiễu:

- Whitelist IP/tài khoản nội bộ hợp lệ.
- Chọn ngưỡng (threshold) hợp lý theo môi trường thực tế.
- Bổ sung ngữ cảnh: threat intel, mức độ quan trọng của tài sản.

Đó là kết thúc loạt **SOC căn bản**. Cảm ơn bạn đã theo dõi!
