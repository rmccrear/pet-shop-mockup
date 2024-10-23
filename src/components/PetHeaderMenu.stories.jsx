import PetHeaderMenu from './PetHeaderMenu';

const meta = {
  component: PetHeaderMenu,
};

export default meta;

export const Default = {
  args: {
    menuItems: ["About", "Contacts", "Download", "Pricing", "Account"]
  }
};

export const French = {
  args: {
    menuItems: ["À propos", "Contacts", "Télécharger", "Tarification", "Compte"]
  }
};

export const Portuguese = {
  args: {
    menuItems: ["Sobre", "Contatos", "Baixar", "Preços", "Conta"]
  }
};

export const Japanese = {
  args: {
    menuItems: ["概要", "連絡先", "ダウンロード", "価格", "アカウント"]
  }
};