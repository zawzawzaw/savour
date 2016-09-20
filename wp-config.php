<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_savour');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7ANL;e_nB2XEWSk7c0{-U)mBY#?>JE#?RQ=nUhcANvAqNJ) s;-h{YU|<]2X0ny7');
define('SECURE_AUTH_KEY',  'rU`(z!nC~D]97b?hoU4Vh:),ZRKC_7W@[f^HZ*nTw{vwpMbE9EXnmAv|3](QCsmt');
define('LOGGED_IN_KEY',    ']rmj@V`Jj|^==?)tkEC,;7AnM{*U>R,l+CD?nv`/dcs&6+w(,]d@:0J?WcG]#@+v');
define('NONCE_KEY',        '`+T}BO$*rtAO%OFatfm: b5{QY;+}$SFQVG=y-sy`+r,ccC;$Qg}nwZ%*>Y_RVVF');
define('AUTH_SALT',        '_2L&s>FBWVO;S(A^n.jnD1V,NBqOu+7NK9m@DaY~Pj~SX^jec_G&B7d)Yp$KdM$s');
define('SECURE_AUTH_SALT', 'XAYsD5qwG[Y7S|vG1V[W.YR-8jYkdu$VB[N84Kn^~o8YNt3De i|n/Oe%<GGiqk*');
define('LOGGED_IN_SALT',   '.ps{2#OBlJ5{9T5D{a!NR2g=d_?(pEA.>[t)AfXwx;:{.WnIIAQ7T =5Sj2~lBam');
define('NONCE_SALT',       'JAc5w|}iewL.lky4>G!Z`|]EFBS?[KiM~YFosBaB#~Y^U;B{mdXB{E a`(NX_ui,');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
