export const environment = {
  production: false,
  auth0: {
    domain: 'dev-mm7o72kg6tf02v5u.us.auth0.com',
    clientId: '6OxEXqtL1YNGlCQAnSFxyGB5aKUjEjC7'
  }
};

/* export const environment = {
  production: true,
  auth0: {
    // Tenta ler do ambiente, se não existir (ex: local), usa o fallback (string)
    domain: process.env['NG_APP_AUTH0_DOMAIN'] || 'dev-mm7o72kg6tf02v5u.us.auth0.com',
    clientId: process.env['NG_APP_AUTH0_CLIENT_ID'] || '6OxEXqtL1YNGlCQAnSFxyGB5aKUjEjC7'
  }
}; */
