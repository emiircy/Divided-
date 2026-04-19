const { createApp } = Vue

createApp({
    // Le "data" contient toutes les variables que l'application surveille
    data() {
        return {
            // true = Dashboard / false = Landing Page
            isConnected: false,

            // true = Ouvre automatiquement le formulaire de création au chargement du Dashboard
            openCreateGroup: false,
            
            // Pourra servir plus tard pour naviguer entre "Mes Groupes" et "Mon Profil"
            currentTab: 'home' 
        }
    },
    
    // Les "methods" sont les fonctions que tu déclencheras (ex: @click="logout")
    methods: {
        logout() {
            this.isConnected = false;
            this.openCreateGroup = false;
        }
    }
}).mount('#app')