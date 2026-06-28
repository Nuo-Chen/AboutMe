---
layout: single
title: "Publications"
permalink: /publications/
---

{% include base_path %}

<div class="pub-year-group">
  <p class="pub-year-heading">Publications List</p>
  {% for post in site.publications reversed %}
    <div class="pub-item">
      <span class="pub-year">{{ post.date | date: "%Y" }}</span>
      <div class="pub-text">
        <strong>{{ post.title }}</strong>. 
        <br>
        {{ post.authors | default: "Chen, N., &amp; Tang, J." }}
        <br>
        <span style="font-style: italic; color: var(--text-primary);">{{ post.venue }}</span>, {{ post.date | date: "%Y" }}.
        <br>
        <div class="paper-links" style="margin-top: 6px;">
          {% if post.paperurl %}
            <a href="{{ post.paperurl }}" target="_blank">[Journal Link]</a>
          {% endif %}
          {% if post.doi %}
            <a href="https://doi.org/{{ post.doi }}" target="_blank">[DOI]</a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
