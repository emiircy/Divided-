const { createApp } = Vue

createApp({
    // Le "data" contient toutes les variables que l'application surveille en temps réel
    data() {
        return {
            // État de connexion : true = Dashboard / false = Landing Page
            isConnected: false,

            // Navigation interne du Dashboard : 'groups' ou 'expense'
            currentTab: 'groups',

            // Gère l'affichage du formulaire de création ET la couleur du bouton flottant (+)
            openCreateGroup: false,

            // Informations de l'utilisateur connecté (simulé pour l'instant)
            user: {
                username: 'Youri',
                name: 'Youri',
                email: 'youri@example.com'
            },

            // Données fictives pour tester l'affichage de tes cartes de groupes
            // Ces données simulent ce que ta base de données renverra plus tard
            myGroups: [
                { id: 1, name: 'Vacances Rome 🇮🇹', members: 3, totalSpent: 450.00 },
                { id: 2, name: 'Coloc - Appart', members: 4, totalSpent: 1280.50 },
                { id: 3, name: 'Cadeau Maman 🎁', members: 2, totalSpent: 80.00 }
            ]
        }
    },
    
    // Les "methods" sont les fonctions qui réagissent aux interactions de l'utilisateur
    methods: {
        // Fonction pour revenir à la Landing Page
        logout() {
            this.isConnected = false;
            this.openCreateGroup = false;
            this.currentTab = 'groups'; // Reset l'onglet par défaut
        },

        // Fonction pour changer d'onglet proprement
        switchTab(tabName) {
            this.currentTab = tabName;
            // Si on change d'onglet, on ferme le formulaire de création par sécurité
            this.openCreateGroup = false;
        },

        // Cette fonction sera utile plus tard pour ajouter un vrai groupe en base de données
        createNewGroup(groupName) {
            console.log("Tentative de création du groupe : " + groupName);
            // Logique d'ajout...
            this.openCreateGroup = false; // On referme le formulaire après création
        }
    }
}).mount('#app')