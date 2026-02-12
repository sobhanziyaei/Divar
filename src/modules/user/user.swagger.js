/**
 * @swagger
 *
 * tags:
 *   name: User
 *   description: User Module and Routes
 */

/**
 * @swagger
 *
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  fullName:
 *                      type: string
 *                  mobile:
 *                      type: string
 *                  verifiedMobile:
 *                      type: boolean
 *                  accessToken:
 *                      type: string
 */

/**
 * @swagger
 *
 * /user/whoAmi:
 *  get:
 *      summary: Get current user information
 *      tags:
 *          -   User
 *      responses:
 *          200:
 *              description: User information retrieved successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 */