# root@

Blog cá nhân về bảo mật, SOC và ghi chú kỹ thuật — [andang241.github.io](https://andang241.github.io/).
Jekyll thuần trên GitHub Pages, giao diện tự thiết kế (sáng/tối, series, filter theo tag).

## Tính năng

- **Series** — gom nhiều bài thành một loạt, có mục lục các phần trong bài.
- **Filter theo tag** ngay ở trang chủ.
- **Trang Tags / Lưu trữ** — tìm bài theo từ khoá hoặc theo thời gian.
- **Chế độ sáng / tối** — nút chuyển ở góc phải header.

## Viết bài mới

Tạo file `_posts/NĂM-THÁNG-NGÀY-tieu-de.md`:

```yaml
---
title: "Tiêu đề bài viết"
date: 2026-07-09 09:00:00 +0700
categories: [chuyên-mục]
tags: [tag1, tag2]
---
```

### Gom bài vào series

Thêm 2 dòng vào front matter:

```yaml
series: "Tên series"
series_part: 2
```

## Cập nhật site

```bash
git add -A && git commit -m "Nội dung mới" && git push
```

## Xem trước ở máy (tùy chọn)

```bash
bundle install
bundle exec jekyll serve
```

## Cấu trúc

- `_config.yml` — cấu hình site
- `_layouts/`, `_includes/` — giao diện (default, home, post, page + include)
- `assets/css/main.css`, `assets/js/main.js` — style + filter/dark-mode
- `_posts/` — bài viết
- `series.html`, `tags.html`, `archive.html`, `about.md` — các trang chức năng
