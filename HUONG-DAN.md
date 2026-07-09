# Hướng dẫn sử dụng blog `root@`

Tài liệu này ghi lại cách vận hành blog: đăng bài, tạo series, gắn tags/categories,
và các mẹo thường dùng.

- **Repo:** `andang241/andang241.github.io` (nhánh `master`)
- **Nền tảng:** [Jekyll](https://jekyllrb.com/) + GitHub Pages (giao diện tự thiết kế)
- **Trang web:** https://andang241.github.io/

---

## 1. Cấu trúc thư mục

```
andang241.github.io/
├── _config.yml         # Cấu hình site (tên, tagline, social, plugin)
├── _posts/             # ★ Mỗi bài viết là 1 file .md ở đây
├── _layouts/           # Khung trang (default, home, post, page)
├── _includes/          # Mảnh ghép (header, footer, sidebar, series-nav, post-card)
├── assets/
│   ├── css/main.css    # Toàn bộ giao diện
│   └── js/main.js      # Filter tag + nút sáng/tối
├── index.html          # Trang chủ
├── series.html         # Trang /series/
├── tags.html           # Trang /tags/
├── archive.html        # Trang /archive/
├── about.md            # Trang /about/
└── HUONG-DAN.md        # (file này)
```

> Bình thường bạn chỉ cần đụng tới thư mục **`_posts/`** (viết bài) và đôi khi
> **`_config.yml`** / **`about.md`**.

---

## 2. Đăng bài mới

### Bước 1 — Tạo file trong `_posts/`

Tên file **bắt buộc** theo định dạng: `NĂM-THÁNG-NGÀY-tieu-de.md`

```
_posts/2026-07-10-meo-phong-thu-soc.md
```

- Ngày sai định dạng → bài **không hiện**.
- Phần `tieu-de` nên viết không dấu, nối bằng dấu `-` (nó thành URL).

### Bước 2 — Viết front matter (khối cấu hình đầu bài)

```yaml
---
title: "Mẹo phòng thủ cho analyst SOC"
date: 2026-07-10 09:00:00 +0700
categories: [soc]
tags: [soc, blue-team, phong-thu]
---
```

| Trường | Bắt buộc | Ý nghĩa |
|--------|:---:|---------|
| `title` | ✅ | Tiêu đề bài viết |
| `date` | ✅ | Ngày giờ đăng (`+0700` = giờ VN) |
| `categories` | ⬜ | Chuyên mục (hiện ở dòng thông tin) |
| `tags` | ⬜ | Từ khoá (dùng để lọc) |

### Bước 3 — Viết nội dung bằng Markdown

Ngay sau khối `---` thứ hai, viết nội dung bình thường. Xem cheatsheet ở [mục 5](#5-viết-nội-dung-markdown-cheatsheet).

### Bước 4 — Đăng lên

Xem [mục 6](#6-đăng-lên-github).

---

## 3. Tạo Series (loạt bài nhiều phần)

Thêm **2 dòng** vào front matter của mỗi bài trong loạt:

```yaml
---
title: "SOC căn bản — Phần 2: Log là nguyên liệu"
date: 2026-07-03 09:00:00 +0700
categories: [soc]
tags: [soc, log]
series: "SOC căn bản"     # ← tên series (giống hệt nhau giữa các phần)
series_part: 2            # ← thứ tự phần
---
```

Blog sẽ **tự động**:
- Hiện hộp *"Series · SOC căn bản · N phần"* kèm mục lục các phần trong mỗi bài.
- Gom loạt bài ở trang **/series/**.
- Gắn nhãn *Series* ở thẻ bài ngoài trang chủ.

> Lưu ý: tên trong `series:` phải **giống y hệt** giữa các phần (kể cả dấu, hoa/thường)
> thì mới gom đúng. Các phần sắp xếp theo `series_part` (1, 2, 3...).

---

## 4. Tags & Categories

### Tags — dùng để **lọc**
```yaml
tags: [soc, osint, tools]
```
- Xuất hiện thành **chip lọc** ở trang chủ và trang **/tags/** (kèm số đếm).
- Danh sách tag **tự tổng hợp** từ tất cả bài — không cần khai báo ở đâu khác.

### Categories — dùng để **phân loại**
```yaml
categories: [soc]
```
- Hiện ở dòng thông tin của bài (`ghi-chú · 1 phút đọc`).

### Nên dùng cái nào?
- **Categories**: chủ đề lớn, ít, mỗi bài 1 cái (vd: `soc`, `tools`, `ghi-chú`).
- **Tags**: từ khoá chi tiết, nhiều (vd: `siem`, `log`, `detection`).

---

## 5. Viết nội dung Markdown (cheatsheet)

```markdown
## Tiêu đề mục (H2)
### Tiêu đề nhỏ (H3)

**in đậm**, *in nghiêng*, `code inline`

- Gạch đầu dòng
1. Danh sách số

[Chữ hiển thị](https://link.com)

![Mô tả ảnh](/assets/img/ten-anh.png)

> Trích dẫn / ghi chú

| Cột A | Cột B |
|-------|-------|
| 1     | 2     |
```

Chèn khối code (nhớ ghi tên ngôn ngữ để tô màu):

<pre>
```bash
sudo tail -f /var/log/auth.log
```
</pre>

---

## 6. Đăng lên GitHub

Từ thư mục repo, chạy:

```bash
git add -A
git commit -m "Thêm bài: mẹo phòng thủ SOC"
git push
```

Đợi **~1–2 phút**, GitHub Pages tự build và cập nhật trang web.

---

## 7. Xem trước ở máy (tuỳ chọn)

```bash
bundle install
bundle exec jekyll serve
```
Rồi mở http://localhost:4000

> Nếu `bundle install` báo lỗi biên dịch `eventmachine` (thường trên Ruby 2.7),
> có thể bỏ qua bước xem trước — cứ push thẳng, GitHub sẽ build giúp.

---

## 8. Các trang & tính năng

| Trang / Nút | Chức năng |
|-------------|-----------|
| **Trang chủ** `/` | Danh sách bài + thanh lọc theo tag |
| **/series/** | Các loạt bài theo chủ đề |
| **/tags/** | Đám mây tag + bài theo từng tag |
| **/archive/** | Toàn bộ bài theo năm |
| **/about/** | Giới thiệu (sửa ở `about.md`) |
| **Nút `☾`/`☀`** (góc phải header) | Chuyển giao diện tối / sáng |
| **Sidebar phải** | Info · Bài gần đây · Tags (tự cập nhật) |

---

## 9. Mẹo & tuỳ chỉnh

- **Ảnh:** bỏ ảnh vào `assets/img/` rồi chèn `![mô tả](/assets/img/ten.png)`.
- **Sửa thông tin cá nhân** (tên blog, tagline, github, email): mở `_config.yml`.
- **Sửa trang giới thiệu:** mở `about.md`.
- **Bài đăng "ngày tương lai" vẫn hiện:** đã bật `future: true` trong `_config.yml`.
- **Giao diện chưa đổi sau khi push:** đã bật cache-busting nên thường tự cập nhật;
  nếu vẫn thấy bản cũ thì nhấn **Ctrl + Shift + R**.
- **Xoá 1 bài:** xoá file `.md` tương ứng trong `_posts/` rồi push.

---

## 10. Xử lý sự cố nhanh

| Hiện tượng | Kiểm tra |
|------------|----------|
| Bài không hiện | Tên file đúng `NĂM-THÁNG-NGÀY-...` chưa? Front matter có `---` đủ 2 dòng chưa? |
| Trang web không cập nhật | Đợi thêm 1–2 phút; hard-refresh (Ctrl+Shift+R) |
| Build lỗi | Vào GitHub → repo → tab **Actions** / **Settings → Pages** xem thông báo lỗi |
| Series không gom | Tên `series:` giữa các phần có **giống hệt** nhau không? |
| Lỗi giao diện | Kiểm tra YAML front matter (thụt lề, dấu ngoặc kép) |

---

*Chúc bạn viết blog vui vẻ! — `root@andang241:~$`*
