# Middlewares

### What are Middlewares?

Middleware functions are functions that have access to the request (`req`), response (`res`), and next middleware function (`next`). They can:

- Execute code before the request reaches a route handler
- Modify `req` or `res`
- End the request-response cycle
- Call `next()` to pass control to the next middleware

### Example: Logging Middleware in Express

```js
app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next(); // Continue to next middleware or route handler
});
```
