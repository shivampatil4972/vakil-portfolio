/* ============================================================
   VAKIL PORTFOLIO — ENHANCEMENTS SCRIPT
   Toast · Ripple · Tilt · Keyboard · Advanced UX
   ============================================================ */

'use strict';

/* ── Toast Notification System ────────────────────────────── */
window.showToast = function(message, type, duration) {
  type     = type     || 'success';
  duration = duration || 4000;
  var container = document.getElementById('toast-container');
  if (!container) return;
  var icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info' };
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = '<i class="fa-solid ' + (icons[type] || icons.success) + '" aria-hidden="true"></i> ' + message;
  container.appendChild(toast);
  setTimeout(function() {
    toast.classList.add('hide');
    setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 350);
  }, duration);
};

/* ── Ripple keyframe injection ────────────────────────────── */
(function() {
  var s = document.createElement('style');
  s.textContent = '@keyframes ripple{to{transform:scale(2.5);opacity:0}}';
  document.head.appendChild(s);
})();

document.addEventListener('DOMContentLoaded', function() {

  /* ── Ripple on CTA Buttons ──────────────────────────────── */
  document.querySelectorAll('.btn-primary, .btn-gold, .btn-nav-cta').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var rect   = this.getBoundingClientRect();
      var size   = Math.max(rect.width, rect.height);
      var ripple = document.createElement('span');
      ripple.style.cssText =
        'position:absolute;border-radius:50%;background:rgba(255,255,255,.25);' +
        'pointer-events:none;transform:scale(0);animation:ripple .55s ease;' +
        'width:' + size + 'px;height:' + size + 'px;' +
        'left:' + (e.clientX - rect.left - size / 2) + 'px;' +
        'top:'  + (e.clientY - rect.top  - size / 2) + 'px;';
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(function() { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 600);
    });
  });

  /* ── 3-D Tilt on Practice Cards ─────────────────────────── */
  document.querySelectorAll('.practice-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x    = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
      var y    = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
      card.style.transform = 'translateY(-8px) perspective(600px) rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease';
    });
    card.addEventListener('mouseenter', function() {
      card.style.transition = 'none';
    });
  });

  /* ── Keyboard Navigation — FAQ ──────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.setAttribute('tabindex', '0');
    q.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); q.click(); }
    });
  });

  /* ── Keyboard Navigation — Gallery ─────────────────────── */
  document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
    });
  });

  /* ── Min date for booking form ───────────────────────────── */
  var dateInput = document.getElementById('appt_date');
  if (dateInput) {
    dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
  }



  /* ── Intersection Observer: section .in-view ─────────────── */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('section[id]').forEach(function(s) { io.observe(s); });
  }

  /* ── Scroll-spy: navbar active state handled purely via CSS ── */
  /* (Active state styling is defined in style.css) */


  /* ── Smooth reveal for trust badges ─────────────────────── */
  if ('IntersectionObserver' in window) {
    var badgeObs = new IntersectionObserver(function(entries) {
      if (entries.some(function(e) { return e.isIntersecting; })) {
        document.querySelectorAll('.trust-badge').forEach(function(b, i) {
          setTimeout(function() {
            b.style.animation = 'fadeInUp .4s ease both';
          }, i * 80);
        });
        badgeObs.disconnect();
      }
    }, { threshold: 0.3 });
    var trustSection = document.getElementById('trust');
    if (trustSection) badgeObs.observe(trustSection);
  }

  /* ── Active FAQ aria-expanded sync ──────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function(q) {
    var observer = new MutationObserver(function() {
      var isOpen = q.closest('.faq-item').classList.contains('open');
      q.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    if (q.closest('.faq-item')) {
      observer.observe(q.closest('.faq-item'), { attributes: true, attributeFilter: ['class'] });
    }
  });

  /* ── Copy phone number on click ─────────────────────────── */
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.href.replace('tel:', '')).then(function() {
          window.showToast('Phone number copied!', 'info', 2000);
        }).catch(function() {});
      }
    });
  });

  /* ── Navbar CTA attention pulse (after 8s) ──────────────── */
  setTimeout(function() {
    var ctaBtn = document.querySelector('.btn-nav-cta');
    if (!ctaBtn) return;
    var pulse = document.createElement('style');
    pulse.textContent = [
      '@keyframes navPulse{',
      '0%{box-shadow:0 4px 20px rgba(30,58,138,.3)}',
      '50%{box-shadow:0 4px 32px rgba(212,175,55,.6),0 0 0 6px rgba(212,175,55,.1)}',
      '100%{box-shadow:0 4px 20px rgba(30,58,138,.3)}',
      '}'
    ].join('');
    document.head.appendChild(pulse);
    ctaBtn.style.animation = 'navPulse 1.2s ease 2';
    setTimeout(function() { ctaBtn.style.animation = ''; }, 2600);
  }, 8000);

  /* ── Scroll to booking after hero CTA click ─────────────── */
  document.querySelectorAll('a[href="#booking"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.getElementById('booking');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
