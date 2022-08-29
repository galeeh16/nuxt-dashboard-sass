import consolaGlobalInstance from "consola";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    if (
      to.path !== '/login' 
      && to.path !== '/register' 
      && to.path !== '/forgot-password'
    ) {
      const config = useRuntimeConfig();
      const response = await fetch(`${config.public.apiUrl}/api/v1/auth/check-token`,
      { 
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      const data = await response.json();
      if (data.data !== true) {
        return navigateTo('/login', { redirectCode: 401 })
        // throw throwError({ statusCode: 403, statusMessage: 'You Are Not Authorize for this Page', cause: 'Token not found.'});
      }
    }
  } catch (error) {
     throw throwError({ statusCode: 500, statusMessage: 'The server cek token seems to be offline, please contact admin :('});
  }
});