---
layout: single
title: "Blog"
permalink: /blog/
---

{% include base_path %}

<div class="pub-year-group">
  <p class="pub-year-heading">Recent Posts</p>
  {% for post in site.posts %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 100px; display: inline-block;">{{ post.date | date: "%b %d, %Y" }}</span>
    <div class="pub-text">
      <strong style="font-size: 17px; font-family: var(--serif);"><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></strong>
      {% if post.excerpt %}
      <p style="margin-top: 6px; color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">{{ post.excerpt | strip_html | truncatewords: 35 }}</p>
      {% endif %}
      {% if post.tags %}
      <div class="interests-grid" style="margin-top: 10px;">
        {% for tag in post.tags %}
        <span class="badge" style="font-size: 10px; padding: 2px 8px;">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>
  {% else %}
  <p style="color: var(--text-tertiary); font-style: italic; padding: 12px 0;">No posts found.</p>
  {% endfor %}
</div>
