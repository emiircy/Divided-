const { createApp, ref, onMounted } = Vue;

const app = createApp({
    setup() {
        // --- ÉTAT (STATE) ---
        const isConnected = ref(false); 
        const user = ref('Youri');
        const groups = ref([]); // On commence vide pour simuler le chargement serveur

        // --- ACTIONS / FONCTIONS ---
        
        // Fonction pour gérer la connexion (Interaction Séance 4)
        function launchApp() {
            isConnected.value = true;
            console.log("Utilisateur connecté : " + user.value);
        }

        // Fonction pour gérer la déconnexion
        function logoutApp() {
            isConnected.value = false;
            // On vide les groupes quand on quitte pour simuler une nouvelle session plus tard
            groups.value = []; 
        }

        // --- LOGIQUE SERVEUR (onMounted) ---
        onMounted(() => {
            console.log("Application Divided prête.");
            
            // Simulation d'un chargement depuis un serveur PHP (Séance 4)
            // On attend 1.5 seconde avant de remplir le tableau
            setTimeout(() => {
                groups.value = [
                    { id: 1, name: 'Roadtrip Italie', members: 3, balance: '+ 15.50€', status: 'Actif', emoji: '🇮🇹' },
                    { id: 2, name: 'Coloc - Rue de la Paix', members: 4, balance: '- 2.00€', status: 'Actif', emoji: '🏠' },
                    { id: 3, name: 'Cadeau Maman', members: 2, balance: 'Équilibré', status: 'Fermé', emoji: '🎁' }
                ];
                console.log("Données récupérées du serveur !");
            }, 1500);
        });

        // Ce que l'on rend disponible pour le HTML
        return {
            isConnected,
            user,
            groups,
            launchApp,
            logoutApp
        }
    }
});

app.mount('#app');