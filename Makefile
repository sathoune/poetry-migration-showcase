default:
	docker compose up -d

down:
	docker compose down --remove-orphans

prod:
	docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d