const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('nombre');
const profilePictureInput = document.getElementById('profile-picture');
const profilePreview = document.getElementById('profile-preview');
const profilePlaceholder = document.getElementById('profile-placeholder');

const headerSubtitle = document.querySelector('.header-subtitle');

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

profilePictureInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    const base64 = await fileToBase64(file);
    profilePreview.src = base64;
    profilePreview.classList.add('active');
    profilePlaceholder.classList.add('hidden');
  }
});

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const profilePicture = profilePictureInput.files[0];

  if (!name || name.length < 2) {
    const errorMessage = document.getElementById('error-message-nombre');
    errorMessage.textContent = 'Por favor, ingresa un nombre válido (al menos 2 caracteres).';
    return;
  }
  
  if (profilePicture) {
    const base64 = await fileToBase64(profilePicture);
    window.localStorage.setItem('profilePicture', base64);
  }

  window.localStorage.setItem('nombre', name);
})

document.addEventListener('DOMContentLoaded', () => {
  const storedName = window.localStorage.getItem('nombre');
  const storedProfilePicture = window.localStorage.getItem('profilePicture');

  if (storedName) {
    headerSubtitle.textContent = `¡Hola, ${storedName}!`;
  }
});