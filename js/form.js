function showForm(formId) {
    // Tüm formları gizle
    document.querySelectorAll('form').forEach(form => form.classList.remove('active'));
    
    // Seçilen formu göster
    document.getElementById(formId).classList.add('active');
}

