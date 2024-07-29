all : up

up : 
	@docker-compose up --build

down : 
	@docker-compose down

status : 
	@docker ps

re: 
	docker system prune -af
	make up
