# 🚀 DÉMARRAGE RAPIDE - DÉMO INVESTISSEUR

## En 3 étapes simples:

### 1️⃣ Installer les dépendances
```bash
npm install
```

### 2️⃣ Créer le fichier de configuration
```bash
# Renommez le fichier .env.demo en .env.local
cp .env.demo .env.local
```

**OU créez manuellement un fichier `.env.local` avec ce contenu:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://demo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=demo_key_for_investor_presentation
SUPABASE_SERVICE_ROLE_KEY=demo_service_key
OPENAI_API_KEY=sk-demo
RESEND_API_KEY=re_demo
RESEND_FROM_EMAIL=demo@resend.dev
NEXT_PUBLIC_APP_URL=http://localhost:3000
CRON_SECRET=demo_secret_123
```

### 3️⃣ Lancer l'application
```bash
npm run dev
```

## 📸 Prendre les 3 Screenshots

Une fois l'app lancée, ouvrez ces 3 URLs dans votre navigateur:

### **Screenshot 1: Dashboard Admin**
```
http://localhost:3000/admin
```
→ Montre les statistiques, activité, et performances

### **Screenshot 2: Gestion des Emails**
```
http://localhost:3000/admin/emails
```
→ Montre les emails quotidiens envoyés avec tracking

### **Screenshot 3: Liste des Abonnés**
```
http://localhost:3000/admin/subscribers
```
→ Montre les 8 abonnés avec leurs détails

---

## ⚡ Dépannage Rapide

### Erreur: "Environment variables validation failed"
✅ **Solution**: Ignorez cet avertissement, c'est normal en mode démo

### Erreur: "Module not found"
✅ **Solution**: Relancez `npm install`

### Page blanche
✅ **Solution**: Attendez quelques secondes, le dev server met du temps à démarrer

---

## 🎯 C'est tout !

Les pages utilisent des **données mockées** - aucune API réelle n'est appelée.

**Consultez DEMO_INVESTOR.md pour plus de détails sur la présentation.**

Bonne chance! 🚀

