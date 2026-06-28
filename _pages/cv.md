---
layout: single
title: "CV"
permalink: /cv/
---

<!-- Education Section -->
<div class="pub-year-group">
  <p class="pub-year-heading">Education</p>
  {% for edu in site.data.cv_data.education %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 80px;">{{ edu.years }}</span>
    <div class="pub-text">
      <strong>{{ edu.title }}</strong>
      <br>
      {{ edu.institution }}
      {% if edu.details %}
      <br>
      <span style="color: var(--text-tertiary);">{{ edu.details }}</span>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- Experience Section -->
<div class="pub-year-group">
  <p class="pub-year-heading">Research Experience</p>
  {% for exp in site.data.cv_data.experience %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 80px;">{{ exp.years }}</span>
    <div class="pub-text">
      <strong>{{ exp.title }}</strong>
      <br>
      {{ exp.institution }}
      <br>
      <span style="color: var(--text-secondary);">{{ exp.desc }}</span>
      {% if exp.supervisor %}
      <br>
      <span style="color: var(--text-tertiary);">{{ exp.supervisor }}</span>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- Teaching Experience Section -->
<div class="pub-year-group">
  <p class="pub-year-heading">Teaching Experience</p>
  {% for teach in site.data.cv_data.teaching %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 80px;">{{ teach.years }}</span>
    <div class="pub-text">
      <strong>{{ teach.title }}</strong>
      <br>
      {{ teach.institution }}
      <br>
      <span style="color: var(--text-secondary);">{{ teach.desc }}</span>
    </div>
  </div>
  {% endfor %}
</div>

<!-- Selected Talks Section -->
<div class="pub-year-group">
  <p class="pub-year-heading">Selected Presentations</p>
  {% for talk in site.talks reversed %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 80px;">{{ talk.date | date: "%b %Y" }}</span>
    <div class="pub-text">
      <strong>{{ talk.title }}</strong>
      <br>
      {{ talk.type | default: "Talk" }} {% if talk.location %}at {{ talk.location }}{% endif %}
      {% if talk.excerpt %}
      <br>
      <span style="color: var(--text-secondary);">{{ talk.excerpt }}</span>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- Technical Skills Section -->
<div class="pub-year-group">
  <p class="pub-year-heading">Technical Skills</p>
  {% for skill in site.data.cv_data.skills %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 80px;">{{ skill.label }}</span>
    <div class="pub-text">
      {{ skill.items }}
    </div>
  </div>
  {% endfor %}
</div>

<!-- Service and Leadership Section -->
<div class="pub-year-group">
  <p class="pub-year-heading">Service &amp; Leadership</p>
  {% for serv in site.data.cv_data.service %}
  <div class="pub-item">
    <span class="pub-year" style="min-width: 80px;">{{ serv.years }}</span>
    <div class="pub-text">
      <strong>{{ serv.title }}</strong>
      <br>
      {{ serv.desc }}
    </div>
  </div>
  {% endfor %}
</div>
