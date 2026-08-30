.PHONY: help dev build deploy preview

PORT ?= 3000

help:
	@echo "DKM Masjid Nurul Falah (dkmnf) Commands:"
	@echo "  make dev      - Start local preview server (:$(PORT))"
	@echo "  make deploy   - Commit and push changes to GitHub Pages"

dev:
	@echo "🌐 Running local preview on http://localhost:$(PORT)..."
	python3 -m http.server $(PORT)

preview: dev

deploy:
	git add .
	(git diff --staged --quiet || git commit -m "feat: update Masjid Nurul Falah portal $(shell date +%Y-%m-%d)")
	git push origin main
	@echo "✅ Pushed to main. GitHub Actions will deploy to https://burubur.github.io/dkmnf/"
