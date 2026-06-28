---
layout: single
title: "Data & Code"
permalink: /data/
---

<div class="divider"></div>

{% for project in site.data.data_projects %}
<div class="theme-card">
  <div class="theme-num">🔗</div>
  <div class="theme-body">
    <p class="theme-title">{{ project.title }}</p>
    <p class="theme-desc">{{ project.desc }}</p>
    <div class="theme-tags" style="margin-bottom: 8px;">
      {% for tag in project.tags %}
      <span class="t-tag">{{ tag }}</span>
      {% endfor %}
    </div>
    <div class="paper-links">
      {% for link in project.links %}
      <a href="{{ link.url }}" target="_blank">[{{ link.text }}]</a>
      {% endfor %}
    </div>
  </div>
</div>
{% endfor %}
