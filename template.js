const request = require('axios') // si vous souhaitez faire des requêtes HTTP

class AssistantTemplate {
  /**
   * on crée un constructeur pour la classe `AssistantTemplate`
   * @param {Object} configuration L'objet `configuration` qui vient du fichier configuration.json
   */
  constructor(configuration) {
    // par exemple configuration.key si on a `{ 'key': 'XXX' }` dans le fichier configuration.json
    // exemple: this.key = configuration.key
  }

  /**
   * Il faut ensuite créer une méthode `init()`
   *
   * @param  {Object} plugins Un objet représentant les autres plugins chargés
   * @return {Promise}
   */
  init(plugins) {
    this.plugins = plugins
    // si une configuration est requise (en reprenant l'exemple de 'key') :
    // if (!this.key) return Promise.reject('[assistant-template] Erreur : vous devez configurer ce plugin !')
    return Promise.resolve(this)
  }

  /**
   * Méthode appelée par le système central
   *
   * @param {String} commande La commande envoyée depuis IFTTT par Pushbullet
   * @return {Promise}
   */
  action(commande) {
    // faire quelque chose avec `commande`
    // votre code sera ici principalement
  }
}

/**
 * Initialisation du plugin
 *
 * @param  {Object} configuration La configuration
 * @param  {Object} plugins Un objet qui contient tous les plugins chargés
 * @return {Promise} resolve(this)
 */
exports.init = (configuration, plugins) => {
  return new AssistantTemplate(configuration).init(plugins)
    .then(resource => {
      console.log('[assistant-template] Plugin chargé et prêt.')
      return resource
    })
}

/**
 * À noter qu'il est également possible de sauvegarder des informations supplémentaires dans le fichier configuration.json général
 * Pour cela on appellera this.plugins.assistant.saveConfig('nom-du-plugin', {configuration_en_json_complète}) (exemple dans le plugin freebox)
 */