---
layout: single
title: "Research"
permalink: /research/
---

{% include base_path %}

My research spans atmospheric dynamics, predictability, and data assimilation. I combine global climate modeling (CESM2), regional modeling (WRF), and data assimilation (DART) to investigate polar cyclones, tropopause polar vortices, and tropical boundary layers.

<div class="divider"></div>

{% for project in site.data.research_projects %}
<div class="theme-card">
  <div class="theme-num">{{ project.num }}</div>
  <div class="theme-body">
    <p class="theme-title">{{ project.title }}</p>
    <p class="theme-desc">{{ project.desc }}</p>
    <div class="theme-tags">
      {% for tag in project.tags %}
      <span class="t-tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% if project.images %}
      {% for img in project.images %}
      <div class="research-img-container" style="margin-top: 16px;">
        <img src="{{ base_path }}/images/{{ img.path }}" alt="{{ img.caption }}" class="research-img" width="1200" height="600">
        <p class="research-img-caption">{{ img.caption }}</p>
      </div>
      {% endfor %}
    {% endif %}
  </div>
</div>
{% endfor %}
