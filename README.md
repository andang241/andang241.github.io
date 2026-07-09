# root@

Blog cá nhân về bảo mật, SOC và những ghi chú kỹ thuật.
Dùng [Jekyll](https://jekyllrb.com/) + [GitHub Pages](https://pages.github.com/),
giao diện theme [pages-themes/hacker](https://github.com/pages-themes/hacker).

Trang web: **https://andang241.github.io/**

## Viết bài mới

Tạo file trong `_posts/` theo định dạng `NĂM-THÁNG-NGÀY-tieu-de.md`, mở đầu bằng
front matter:

```yaml
---
title: "Tiêu đề bài viết"
layout: post
---
```

Sau đó viết nội dung bằng Markdown bình thường.

## Cập nhật site

```bash
git add -A && git commit -m "Nội dung mới" && git push
```

GitHub Pages sẽ tự build lại sau khoảng 1–2 phút.

## Xem trước ở máy (tùy chọn)

```bash
bundle install
bundle exec jekyll serve
```

Rồi mở http://localhost:4000

## Cấu trúc

- `_config.yml` — cấu hình site + khai báo `remote_theme`
- `_posts/` — bài viết
- `_layouts/post.html` — layout bài viết (bọc layout `default` của theme)
- `index.html` — trang chủ, liệt kê bài viết
- `aboutme.md` — trang giới thiệu
