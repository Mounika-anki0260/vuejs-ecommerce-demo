<template>
  <div class="contact-page">
    <section class="hero contact-hero animate-scale" style="background: linear-gradient(135deg, #E8DED2 0%, #F5F0E8 50%, #E0D5C7 100%); padding: var(--spacing-xl) 0; text-align: center; min-height: 400px; display: flex; align-items: center; justify-content: center;">
      <div class="container">
        <h1 class="animate-up" style="font-size: 4rem; margin-bottom: 1rem; color: #1A1A1A; font-weight: 700;">Contact us</h1>
        <p class="animate-up" style="color: #2A2A2A; font-size: 1rem; max-width: 600px; margin: 0 auto; font-weight: 500;">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
    </section>

    <section style="padding: var(--spacing-xl) 0;">
      <div class="container" style="max-width: 1200px;">
        <div class="layout-row" style="gap: var(--spacing-lg); align-items: flex-start;">
          <!-- Contact Form -->
          <div class="glass animate-up" style="flex: 1; padding: 3rem; border-radius: 4px;">
            <h3 style="margin-bottom: 2rem; font-size: 1.5rem;">Send us a message</h3>
            <form @submit.prevent="handleSubmit">
              <div style="margin-bottom: 1.5rem;">
                <label class="luxury-label">Name*</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  placeholder="Your name" 
                  required
                  style="width: 100%; padding: 1rem; border: 1px solid var(--accent-soft); background: white; font-family: var(--font-sans);"
                />
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label class="luxury-label">Email*</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required
                  style="width: 100%; padding: 1rem; border: 1px solid var(--accent-soft); background: white; font-family: var(--font-sans);"
                />
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label class="luxury-label">Subject</label>
                <input 
                  v-model="form.subject" 
                  type="text" 
                  placeholder="How can we help?" 
                  style="width: 100%; padding: 1rem; border: 1px solid var(--accent-soft); background: white; font-family: var(--font-sans);"
                />
              </div>

              <div style="margin-bottom: 2rem;">
                <label class="luxury-label">Message*</label>
                <textarea 
                  v-model="form.message" 
                  rows="6" 
                  placeholder="Tell us more..." 
                  required
                  style="width: 100%; padding: 1rem; border: 1px solid var(--accent-soft); background: white; font-family: var(--font-sans); resize: vertical;"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="btn" 
                style="width: 100%; padding: 1.2rem; background: var(--accent-purple); color: white; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <div v-if="submitMessage" :style="{ marginTop: '1rem', padding: '1rem', background: submitSuccess ? '#d4edda' : '#f8d7da', color: submitSuccess ? '#155724' : '#721c24', borderRadius: '4px', textAlign: 'center' }">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="animate-up" style="flex: 0 0 400px; padding: 2rem;">
            <h3 style="margin-bottom: 2rem; font-size: 1.5rem;">Headquarters</h3>
            
            <div style="margin-bottom: 2.5rem;">
              <h4 class="luxury-label" style="margin-bottom: 0.5rem;">The Mina Studio</h4>
              <p style="opacity: 0.7; line-height: 1.8;">
                8241 Us 41,<br/>
                Monteagle,<br/>
                TN 37356<br/>
                United States
              </p>
            </div>

            <div style="margin-bottom: 2.5rem;">
              <h4 class="luxury-label" style="margin-bottom: 0.5rem;">Email</h4>
              <a href="mailto:hello@minacurations.com" style="color: var(--accent-gold); text-decoration: none;">hello@minacurations.com</a>
            </div>

            <div style="margin-bottom: 2.5rem;">
              <h4 class="luxury-label" style="margin-bottom: 0.5rem;">Phone</h4>
              <a href="tel:+15551234567" style="color: var(--text-primary); text-decoration: none; opacity: 0.7;">+1 (555) 123-4567</a>
            </div>

            <div>
              <h4 class="luxury-label" style="margin-bottom: 1rem;">Business Hours</h4>
              <p style="opacity: 0.7; line-height: 1.8; font-size: 0.9rem;">
                Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitSuccess = ref(false)

    const handleSubmit = async () => {
      isSubmitting.value = true
      submitMessage.value = ''

      // Simulate form submission (in a real app, this would send to a backend)
      try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Success
        submitSuccess.value = true
        submitMessage.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
        
        // Reset form
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''

        // Clear success message after 5 seconds
        setTimeout(() => {
          submitMessage.value = ''
        }, 5000)
      } catch (error) {
        submitSuccess.value = false
        submitMessage.value = 'Something went wrong. Please try again.'
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      isSubmitting,
      submitMessage,
      submitSuccess,
      handleSubmit
    }
  }
})
</script>

<style scoped>
.contact-hero {
  position: relative;
  overflow: hidden;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent-gold) !important;
  box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.1);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
