export interface Solution {
  id:          string;
  name:        string;
  tagline:     string;
  description: string;
  features:    string[];
  icon:        string; // emoji ou nom lucide
  category:    "fintech" | "edtech" | "govtech" | "ai" | "infra";
  color:       string;
}

export const SOLUTIONS: Solution[] = [
  {
    id:          "mendolearn",
    name:        "MendoLearn",
    tagline:     "L'éducation sans frontières",
    description: "Plateforme numérique dédiée aux établissements d'enseignement, enseignants, étudiants et professionnels. Un réseau social éducatif complet pour l'Afrique.",
    features:    ["Réseau social éducatif", "Partage de ressources pédagogiques", "Gestion académique", "Collaboration entre apprenants", "Formation en ligne"],
    icon:        "GraduationCap",
    category:    "edtech",
    color:       "#6366F1",
  },
  {
    id:          "mendocoti",
    name:        "Mendo Coti",
    tagline:     "La finance communautaire digitalisée",
    description: "Solution complète de gestion des tontines, cotisations, recouvrements et finances communautaires. Numérisez vos associations et coopératives.",
    features:    ["Gestion des tontines", "Cotisations & recouvrements", "Associations & coopératives", "Épargne communautaire", "Historique des transactions"],
    icon:        "Users",
    category:    "fintech",
    color:       "#00D9A6",
  },
  {
    id:          "mendocash",
    name:        "Mendo Cash",
    tagline:     "Infrastructure de paiement africaine",
    description: "Infrastructure de paiement permettant la circulation sécurisée des fonds. Paiements digitaux, transferts, encaissements et intégrations API.",
    features:    ["Paiements digitaux", "Transferts d'argent", "Encaissements", "Paiements marchands", "Intégrations API"],
    icon:        "Wallet",
    category:    "fintech",
    color:       "#F59E0B",
  },
  {
    id:          "corebanking",
    name:        "Mendo Core Banking",
    tagline:     "Le cœur financier de demain",
    description: "Système bancaire nouvelle génération pour coopératives, microfinances et institutions financières. Gestion complète des opérations bancaires.",
    features:    ["Gestion des comptes", "Épargne & crédit", "Reporting avancé", "Gestion des agences", "Conformité réglementaire"],
    icon:        "Building2",
    category:    "fintech",
    color:       "#3B82F6",
  },
  {
    id:          "mia",
    name:        "MIA",
    tagline:     "L'IA au service de l'Afrique",
    description: "Plateforme d'assistance intelligente pour l'accompagnement utilisateur, l'automatisation des opérations et l'analyse décisionnelle.",
    features:    ["Accompagnement utilisateur", "Automatisation des tâches", "Support client intelligent", "Analyse des données", "Assistance décisionnelle"],
    icon:        "Bot",
    category:    "ai",
    color:       "#8B5CF6",
  },
  {
    id:          "estamp",
    name:        "Estamp",
    tagline:     "La dématérialisation des timbres fiscaux",
    description: "Solution GovTech permettant l'émission, la vérification et le suivi des timbres fiscaux numériques. Réduction de la fraude garantie.",
    features:    ["Émission de timbres numériques", "Vérification instantanée", "Traçabilité complète", "Réduction de la fraude", "Intégration administrative"],
    icon:        "Stamp",
    category:    "govtech",
    color:       "#EC4899",
  },
];